<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Routine;
use App\Models\Sensor;

class RoutineSeeder extends Seeder
{
    public function run()
    {
        // Verificar se existem sensores no banco de dados
        $sensor_ids = Sensor::pluck('id')->toArray();

        if (empty($sensor_ids)) {
            $this->command->info('Nenhum sensor encontrado. Por favor, execute o seeder de sensores primeiro.');
            return;
        }

        // Criando 3 rotinas com dados de exemplo
        Routine::create([
            'nome' => 'Rotina 1',
            'dias_de_ativacao' => 'MTWTF__', // Exemplo de ativação em dias da semana
            'horario_de_inicio' => '08:00:00',
            'duracao' => 60,
            'id_sensor' => $sensor_ids[array_rand($sensor_ids)]
        ]);

        Routine::create([
            'nome' => 'Rotina 2',
            'dias_de_ativacao' => 'MTWTFSS', // Exemplo de todos os dias
            'horario_de_inicio' => '09:00:00',
            'duracao' => 90,
            'id_sensor' => $sensor_ids[array_rand($sensor_ids)]
        ]);

        Routine::create([
            'nome' => 'Rotina 3',
            'dias_de_ativacao' => '______S', // Exemplo de fim de semana
            'horario_de_inicio' => '10:30:00',
            'duracao' => 120,
            'id_sensor' => $sensor_ids[array_rand($sensor_ids)]
        ]);
}
