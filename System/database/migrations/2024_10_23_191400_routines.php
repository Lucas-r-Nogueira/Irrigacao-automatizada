<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Routines extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('routines', function (Blueprint $table) {
            $table->id();
            $table->string('nome', 50);
            $table->char('dias_de_ativacao', 7)->nullable();
            $table->time('horario_de_inicio');
            $table->integer('duracao');
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
        Schema::dropIfExists('routines');
    }
}
