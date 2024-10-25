<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('sensor/rotina/{id}', 'RoutineController@getRoutinesOfSensor');
$router->get('rotinas', 'RoutineController@index');
$router->get('rotina/{id}', 'RoutineController@show');
$router->post('rotina', 'RoutineController@store');
$router->put('rotina', 'RoutineController@update');
$router->delete('rotina/{id}', 'RoutineController@destroy');

$router->get('/sensor/{id}/rotinas', 'SensorController@getSensorWithRoutines');
$router->get('/sensores', 'SensorController@index');
$router->get('/sensor/{id}', 'SensorController@show');
$router->post('/sensor', 'SensorController@store');
$router->put('/sensor', 'SensorController@update');
$router->delete('/sensor/{id}', 'SensorController@destroy');
