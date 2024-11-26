<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Irrigation extends Model
{

    protected $fillable = [
        'horario_de_inicio',
        'horario_de_termino',
        'status',
        'id_sensor'
    ];

    // pega o sensor ao qual a rotina esta associada
    public function sensorIrrigacao()
    {
        return $this->belongsTo(Sensor::class, 'id_sensor');
    }
}
