<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Empleado;
use Illuminate\Http\Request;
use App\Http\Resources\V1\EmpleadoResource;

class EmpleadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EmpleadoResource::collection(Empleado::paginate(5));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function show(Empleado $id)
    {
        return new EmpleadoResource($id);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Empleado $id)
    {   
        $empleadoUpdate = $request->getContent();
        $empleadoUpdate = json_decode($empleadoUpdate, true);
        Empleado::where('id', $id->id)
            ->update(['first_name' => $empleadoUpdate['first_name'],
                        'last_name' => $empleadoUpdate['last_name'],
                        'email' => $empleadoUpdate['email'],
                        'phone' => $empleadoUpdate['phone'],
                        'company_id' => $empleadoUpdate['company_id'],
                        'updated_at' => now(),
                    ]);
        
        return response()->json([
            'message' => 'Success',
            'empleado' => new EmpleadoResource($id)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Empleado  $empleado
     * @return \Illuminate\Http\Response
     */
    public function destroy(Empleado $empleado)
    {
        $empleado->delete();
        return response()->json(['message' => 'Empleado eliminado correctamente'], 204);
    }

    public function empleadosPorEmpresa($idEmpresa)
    {
        return EmpleadoResource::collection(Empleado::where('id_empresa', $idEmpresa)->paginate(5));
    }
}
