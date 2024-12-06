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
                    "id"=> 1,
                    "horario_de_inicio"=> "19:04:35",
                    "horario_de_termino"=> "15:14:19",
                    "status"=> true,
                    "id_sensor"=> 1,
                    "created_at"=> "2024-12-04T19:04:35.000000Z",
                    "updated_at"=> "2024-12-06T15:14:19.000000Z"
                ],
                [
                    "id"=> 2,
                    "horario_de_inicio"=> "19:04:35",
                    "horario_de_termino"=> "15:14:19",
                    "status"=> true,
                    "id_sensor"=> 3,
                    "created_at"=> "2024-12-04T19:04:35.000000Z",
                    "updated_at"=> "2024-12-06T15:14:19.000000Z"
                ],
                [
                    "id" => 3,
                    "horario_de_inicio" => "15:11:17",
                    "horario_de_termino" => "15:11:17",
                    "status" => true, 
                    "id_sensor" => "1",
                    "created_at" => "2024-12-06T15:11:17.000000Z",
                    "updated_at" => "2024-12-06T15:11:17.000000Z"
                ],          
        ]);
    }
}