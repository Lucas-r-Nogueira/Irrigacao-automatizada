<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Irrigations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('irrigations', function (Blueprint $table) {
            $table->id();
            $table->time('horario_de_inicio');
            $table->time('horario_de_termino');
            $table->boolean('status')->default(false);
            $table->unsignedBigInteger('id_sensor');
            $table->timestamps();

            $table->foreign('id_sensor')->references('id')->on('sensors')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('irrigations');
    }
}
