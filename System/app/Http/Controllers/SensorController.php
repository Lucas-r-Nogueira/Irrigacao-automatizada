<?php

namespace App\Http\Controllers;

use App\Models\Sensor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SensorController extends Controller
{

    public function getSensorWithRoutines($id) {

        $sensor = Sensor::with('routines')->find($id);
        return response()->json($sensor, 200);
    }

    public function index()
    {
        $sensors = Routine::all();

        if(!$sensors)
            return response()->json(['error' => 'Não há sensores cadastrados'], 404);

        return response()->json($sensors, 200);
    }

    public function show($id)
    {
        $sensor = Sensor::find($id);

        if(!$sensor)
            return response()->json(['error' => 'Sensor não encontrado'], 404);

        return response()->json($sensor, 200);
    }

    public function store(Request $request)
    {

        $regras = [
            'nome' => ['required', 'string', 'max:50'],
            'local' => ['required', 'string', 'max:100'],
            'descricao' => ['nullable', 'string'],
            'ultima_leitura' => ['required', 'numeric', 'min:0']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $sensor = Sensor::create([
            'nome' => $request->input('nome'),
            'local' => $request->input('local'),
            'descricao' => $request->input('descricao'),
            'ultima_leitura' => $request->input('ultima_leitura'),
        ]);

        return response()->json($sensor, 201);

    }
    
    public function update(Request $request)
    {
        
        $regras = [
            'id' => ['required', 'integer', 'min:0'],
            'nome' => ['nullable', 'string', 'max:255'],
            'local' => ['nullable', 'string', 'max:255'],
            'descricao' => ['nullable', 'string'],
            'ultima_leitura' => ['nullable', 'numeric', 'min:0']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $sensor = Sensor::find($request->input('id'));
        if(!$sensor)
            return response()->json(['error' => 'Sensor não encontrado'], 404);

        $atributos = ['nome', 'local', 'descricao', 'ultima_leitura'];

        foreach ($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $sensor->$atributo = $request->input($atributo)
                : null;
        }
        $sensor->save();

        return response()->json($sensor, 200);

    }

    public function destroy($id)
    {

        $sensor = Sensor::find($id);

        if(!$sensor)
            return response()->make(404);

        $sensor->delete();

        return response()->make();
    }
}
