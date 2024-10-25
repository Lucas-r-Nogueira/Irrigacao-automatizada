<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Sensor;

class SensorSeeder extends Seeder
{
    public function run()
    {
        // Criando 5 sensores com dados de exemplo
        Sensor::create([
            'nome' => 'Sensor A',
            'local' => 'Sala 101',
            'descricao' => 'Sensor de temperatura',
            'ultima_leitura' => 23.45
        ]);

        Sensor::create([
            'nome' => 'Sensor B',
            'local' => 'Sala 102',
            'descricao' => 'Sensor de pressão',
            'ultima_leitura' => 12.34
        ]);

        Sensor::create([
            'nome' => 'Sensor C',
            'local' => 'Sala 103',
            'descricao' => 'Sensor de umidade',
            'ultima_leitura' => 56.78
        ]);

        Sensor::create([
            'nome' => 'Sensor D',
            'local' => 'Sala 104',
            'descricao' => 'Sensor de gás',
            'ultima_leitura' => 78.90
        ]);

        Sensor::create([
            'nome' => 'Sensor E',
            'local' => 'Sala 105',
            'descricao' => 'Sensor de movimento',
            'ultima_leitura' => 45.67
        ]);
    }
}
