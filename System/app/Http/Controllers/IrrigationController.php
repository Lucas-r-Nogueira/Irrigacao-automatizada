<?php

namespace App\Http\Controllers;

use App\Models\Irrigation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class IrrigationController extends Controller
{

    public function finishIrrigashion($id) {
        $irrigation = Irrigation::find($id);

        if(!$irrigation)
            return response()->json(['error' => 'Irrigação não encontrada'], 404);

        $irrigation->status = true;

        $irrigation->save();

        return response()->json($irrigation, 200);

    }

    public function getSensorOfIrrigation($id) {
        $irrigations = Irrigation::with('sensorIrrigation')->find($id);

        return response()->json($irrigations, 200);
    }

    public function index()
    {
        $irrigations = Irrigation::all();

        if(!$irrigations)
            return response()->json(['error' => 'Não há rotinas cadastradas'], 404);

        return response()->json($irrigations, 200);
    }

    public function show($id)
    {
        $irrigation = Irrigation::find($id);

        if(!$irrigation)
            return response()->json(['error' => 'Rotina não encontrada'], 404);

        return response()->json($irrigation, 200);
    }

    public function store(Request $request)
    {
        $regras = [
            'horario_de_inicio' => ['required', 'date_format:H:i:s'],
            'horario_de_termino' => ['required', 'date_format:H:i:s'],
            'status' => ['required', 'boolean'],
            'id_sensor' => ['required', 'integer', 'min:0']
        ];

        $validacao = Validator::make($request->all(), $regras);

        if($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $irrigation = Irrigation::create([
            'horario_de_inicio' => $request->input('horario_de_inicio'),
            'horario_de_termino' => $request->input('horario_de_termino'),
            'status' => $request->input('status'),
            'id_sensor' => $request->input('id_sensor')
        ]);

        return response()->json($irrigation, 201);
    }

    public function update(Request $request)
    {
        $regras = [
            'id' => ['required', 'integer', 'min:0'],
            'horario_de_inicio' => ['nullable', 'date_format:H:i:s'],
            'horario_de_termino' => ['nullable', 'date_format:H:i:s'],
            'status' => ['nullable', 'boolean'],
            'id_sensor' => ['nullable', 'integer', 'min:0']
            ];

        $validacao = Validator::make($request->all(), $regras);

        if($validacao->fails())
            return response()->json($validacao->errors(), 422);

        $irrigation = Irrigation::find($request->input('id'));
        if(!$irrigation)
            return response()->json(['error' => 'Rotina não encontrada'], 404);

        $atributos = ['horario_de_inicio', 'horario_de_termino', 'status', 'id_sensor'];

        foreach ($atributos as $atributo) {
            $request->input($atributo) !== null
                ? $irrigation->$atributo = $request->input($atributo)
                : null;
        }
        $irrigation->save();

        return response()->json($irrigation, 200);
    }

    public function destroy($id)
    {

        $irrigation = Irrigation::find($id);

        if(!$irrigation)
            return response()->make(404);

        $irrigation->delete();

        return response()->make();
    }
}
