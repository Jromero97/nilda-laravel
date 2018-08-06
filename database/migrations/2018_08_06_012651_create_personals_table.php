<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_personal', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('first_name', 40);
            $table->string('last_name', 40);
            $table->string('address1', 60);
            $table->string('address2', 60);
            $table->string('telephone', 20);
            $table->integer('personal_personalcategory_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_personal');
    }
}
