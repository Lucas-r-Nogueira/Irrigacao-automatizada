<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{

    protected $fillable = [
        'nome',
        'local',
        'descricao',
        'ultima_leitura'
    ];

    // pega as rotinas associadas a determinado sensor
    public function routines() {
        // id sensor corresponde ao atributo em rotina
        return $this->hasmany(Routine::class, 'id_sensor');
    }

    public function irrigations() {
        return $this->hasmany(Irrigation::class, 'id_sensor');
    }
}


