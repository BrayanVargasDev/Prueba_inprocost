<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Http\Request;
use App\Http\Resources\V1\EmpresaResource;

class EmpresaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return EmpresaResource::collection(Empresa::paginate(5));
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
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function show(Empresa $id)
    {
        return new EmpresaResource($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Empresa $id)
    {
        $empresaUpdate = $request->getContent();
        $empresaUpdate = json_decode($empresaUpdate, true);
        Empresa::where('id', $id->id)
            ->update([
                'name' => $empresaUpdate['name'],
                'email' => $empresaUpdate['email'],
                'website' => $empresaUpdate['website'],
                'logo' => $empresaUpdate['logo'],
                'updated_at' => now(),
            ]);
        
        return response()->json([
            'message' => 'Success',
            'empresa' => new EmpresaResource($id)], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Empresa  $empresa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Empresa $id)
    {
        $id->delete();
        return response()->json(['message' => 'Successfully deleted'], 204);
    }
}
