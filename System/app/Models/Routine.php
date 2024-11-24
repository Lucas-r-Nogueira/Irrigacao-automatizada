<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Routine extends Model
{

    protected $fillable = [
        'nome',
        'dias_de_ativacao',
        'horario_de_inicio',
        'horario_de_termino',
        'id_sensor'
    ];

    // pega o sensor ao qual a rotina esta associada
    public function sensorRoutine()
    {
        return $this->belongsTo(Sensor::class, 'id_sensor');
    }
}
