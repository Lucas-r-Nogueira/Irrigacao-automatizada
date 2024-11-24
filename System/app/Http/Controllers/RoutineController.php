<?php

namespace App\Http\Controllers;

use App\Models\Routine;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RoutineController extends Controller
{

    public function getSensorOfRoutine($id) {
        $routines = Routine::with('sensorRoutine')->find($id);

        return response()->json($routines, 200);
    }

    public function index()
    {
        $routines = Routine::all();

        if(!$routines)
            return response()->json(['error' => 'Não há rotinas cadastradas'], 404);

        return response()->json($routines, 200);
    }

    public function show($id)
    {
        $routine = Routine::find($id);

        if(!$routine)
            return response()->json(['error' => 'Rotina não encontrada'], 404);

        return response()->json($routine, 200);
    }

    public function store(Request $request)
    {
        $regras = [
            'nome' => ['required', 'string', 'max:255'],
            'dias_de_ativacao' => ['nullable', 'string', 'size:7', 'regex:/^[01]+$/'],
            'horario_de_inicio' => ['required', 'date_format:H:i:s'],
            'horario_de_termino' => ['required', 'date_format:H:i:s'],
            'id_sensor' => ['required', 'integer', 'min:0']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $routine = Routine::create([
            'nome' => $request->input('nome'),
            'dias_de_ativacao' => $request->input('dias_de_ativacao'),
            'horario_de_inicio' => $request->input('horario_de_inicio'),
            'horario_de_termino' => $request->input('horario_de_termino'),
            'id_sensor' => $request->input('id_sensor')
        ]);

        return response()->json($routine, 201);
    }

    public function update(Request $request)
    {
        $regras = [
            'id' => ['required', 'integer', 'min:0'],
            'nome' => ['nullable', 'string', 'max:255'],
            'dias_de_ativacao' => ['nullable', 'string', 'size:7', 'regex:/^[01]+$/'],
            'horario_de_inicio' => ['nullable', 'date_format:H:i:s'],
            'horario_de_termino' => ['required', 'date_format:H:i:s'],
            'id_sensor' => ['nullable', 'integer', 'min:0']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $routine = Routine::find($request->input('id'));
        if(!$routine)
            return response()->json(['error' => 'Rotina não encontrada'], 404);

        $atributos = ['nome', 'dias_de_ativacao', 'horario_de_inicio', 'horario_de_termino', 'id_sensor'];

        foreach ($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $routine->$atributo = $request->input($atributo)
                : null;
        }
        $routine->save();

        return response()->json($routine, 200);
    }

    public function destroy($id)
    {

        $routine = Routine::find($id);

        if(!$routine)
            return response()->make(404);

        $routine->delete();

        return response()->make();
    }
}
