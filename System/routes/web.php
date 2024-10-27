<?php

/*
|--------------------------------------------------------------------------
| Sensor Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'sensor'], function () use ($router) {
    $router->get('/{id}/rotinas/irrigacoes', 'SensorController@getSensorWithRoutinesAndIrrigations');
    $router->get('/{id}/rotinas', 'SensorController@getSensorWithRoutines');
    $router->get('/{id}/irrigacoes', 'SensorController@getSensorHistoryOfIrrigations');
    $router->get('/', 'SensorController@index');
    $router->get('/{id}', 'SensorController@show');
    $router->post('/adicionar', 'SensorController@store');
    $router->put('/editar', 'SensorController@update');
    $router->delete('/{id}', 'SensorController@destroy');
});

/*
|--------------------------------------------------------------------------
| Rotina Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'rotina'], function () use ($router) {
    $router->get('/{id}/sensor', 'RoutineController@getSensorOfRoutine');
    $router->get('/', 'RoutineController@index');
    $router->get('/{id}', 'RoutineController@show');
    $router->post('/adicionar', 'RoutineController@store');
    $router->put('/editar', 'RoutineController@update');
    $router->delete('/{id}', 'RoutineController@destroy');
});

/*
|--------------------------------------------------------------------------
| Irrigacao Routes
|--------------------------------------------------------------------------
*/

$router->group(['prefix' => 'irrigacao'], function () use ($router) {
    $router->get('/{id}/sensor', 'IrrigationController@getSensorOfIrrigation');
    $router->put('/{id}/finalizar', 'IrrigationController@finishIrrigashion');
    $router->get('/', 'IrrigationController@index');
    $router->get('/{id}', 'IrrigationController@show');
    $router->post('/adicionar', 'IrrigationController@store');
    $router->put('/editar', 'IrrigationController@update');
    $router->delete('/{id}', 'IrrigationController@destroy');
});