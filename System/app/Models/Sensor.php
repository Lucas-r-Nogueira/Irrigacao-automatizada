<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    // protected $table = 'sensors';

    protected $fillable = [
        'nome',
        'local',
        'descricao',
        'ultima_leitura'
    ];

    // pega as rotinas associadas a determinado sensor
    public function rotinas() {
        // id sensor corresponde ao atributo em rotina
        return $this->hasmany(Rotina::class, 'id_sensor');
    }
}


