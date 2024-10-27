<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('rotina/{id}/sensor', 'RoutineController@getSensorOfRoutine');
$router->get('rotinas', 'RoutineController@index');
$router->get('rotina/{id}', 'RoutineController@show');
$router->post('rotina', 'RoutineController@store');
$router->put('rotina', 'RoutineController@update');
$router->delete('rotina/{id}', 'RoutineController@destroy');

$router->get('irrigacao/{id}/sensor', 'IrrigationController@getSensorOfIrrigation');
$router->put('irrigacao/{id}/finalizar', 'IrrigationController@finishIrrigashion');
$router->get('irrigacoes', 'IrrigationController@index');
$router->get('irrigacao/{id}', 'IrrigationController@show');
$router->post('irrigacao', 'IrrigationController@store');
$router->put('irrigacao', 'IrrigationController@update');
$router->delete('irrigacao/{id}', 'IrrigationController@destroy');

$router->get('/sensor/{id}/rotinas/irrigacoes', 'SensorController@getSensorWithRoutinesAndIrrigations');
$router->get('/sensor/{id}/rotinas', 'SensorController@getSensorWithRoutines');
$router->get('/sensor/{id}/irrigacoes', 'SensorController@getSensorHistoryOfIrrigations');
$router->get('/sensores', 'SensorController@index');
$router->get('/sensor/{id}', 'SensorController@show');
$router->post('/sensor', 'SensorController@store');
$router->put('/sensor', 'SensorController@update');
$router->delete('/sensor/{id}', 'SensorController@destroy');
