<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IrrigationSeeder extends Seeder
{
    public function run()
    {
        DB::table('irrigations')->insert([
            [
                'horario_de_inicio' => '06:00:00',
                'duracao' => 30,
                'status' => true,
                'id_sensor' => 1,
                // 'created_at' => now(),
                // 'updated_at' => now(),
            ],
            [
                'horario_de_inicio' => '18:00:00',
                'duracao' => 45,
                'status' => false,
                'id_sensor' => 2,
                // 'created_at' => now(),
                // 'updated_at' => now(),
            ],
            [
                'horario_de_inicio' => '12:00:00',
                'duracao' => 20,
                'status' => true,
                'id_sensor' => 3,
                // 'created_at' => now(),
                // 'updated_at' => now(),
            ],
        ]);
    }
}
