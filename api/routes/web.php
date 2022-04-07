<?php

use Illuminate\Support\Facades\Route;


Route::get('empresas', [App\Http\Controllers\EmpresaController::class, 'index']);
