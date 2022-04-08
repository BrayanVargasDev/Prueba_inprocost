<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\EmpresaController as Empresa;
use App\Http\Controllers\Api\V1\EmpleadoController as Empleado;

Route::apiResource('v1/empresas', Empresa::class)
    ->middleware('auth:sanctum');
Route::apiResource('v1/empleados', Empleado::class)
    ->middleware('auth:sanctum');

Route::post('login', [
    App\Http\Controllers\Api\LoginController::class, 
    'login']);