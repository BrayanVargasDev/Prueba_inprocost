<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\EmpresaController as Empresa;
use App\Http\Controllers\Api\V1\EmpleadoController as Empleado;
use App\Http\Controllers\Api\V1\HistoriaController as Historia;

Route::get('v1/empresas', [Empresa::class, 'index'])->middleware('auth:sanctum');
Route::get('v1/empresas/{id}', [Empresa::class, 'show'])->middleware('auth:sanctum');
Route::post('v1/empresas', [Empresa::class, 'store'])->middleware('auth:sanctum');
Route::put('v1/empresas/{id}', [Empresa::class, 'update'])->middleware('auth:sanctum');
Route::delete('v1/empresas/{id}', [Empresa::class, 'destroy'])->middleware('auth:sanctum');

Route::get('v1/empleados', [Empleado::class, 'index'])->middleware('auth:sanctum');
Route::get('v1/empleados/{id}', [Empleado::class, 'show'])->middleware('auth:sanctum');
Route::post('v1/empleados', [Empleado::class, 'store'])->middleware('auth:sanctum');
Route::put('v1/empleados/{id}', [Empleado::class, 'update'])->middleware('auth:sanctum');
Route::delete('v1/empleados/{id}', [Empleado::class, 'destroy'])->middleware('auth:sanctum');
Route::get('v1/empleadosPorEmpresa/{id}', [Empleado::class, 'empleadosPorEmpresa'])->middleware('auth:sanctum');

Route::get('v1/historias', [Historia::class, 'index'])->middleware('auth:sanctum');
Route::get('v1/historias/{id}', [Historia::class, 'show'])->middleware('auth:sanctum');
Route::post('v1/historias', [Historia::class, 'store'])->middleware('auth:sanctum');

Route::post('login', [
    App\Http\Controllers\Api\LoginController::class, 
    'login']);

Route::post('logout', [
    App\Http\Controllers\Api\LoginController::class, 
    'logout']);