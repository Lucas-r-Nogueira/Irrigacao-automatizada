<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Routine extends Model
{

    protected $fillable = [
        'nome',
        'dias_de_ativacao',
        'horario_de_inicio',
        'duracao',
        'id_sensor'
    ];

    // pega o sensor ao qual a rotina esta associada
    public function sensorRotina()
    {
        return $this->belongsTo(Sensor::class, 'id_sensor');
    }
}
