<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Aqui você registra o seeder de sensores e rotinas
        $this->call(SensorSeeder::class);
        $this->call(RoutineSeeder::class);
    }
}
