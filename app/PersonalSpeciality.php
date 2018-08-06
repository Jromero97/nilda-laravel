<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PersonalSpeciality extends Model
{
    // Enable soft delete to avoid drop data
    use SoftDeletes;

    /*
     * Model: PersonalSpeciality
     * This model represent an speciality of personal.
     * Table: personal_personalspeciality; Schema: public
     */
    protected $table = 'personal_personalspeciality';
    protected $primaryKey = 'id';
    protected $dates = ['deleted_at', 'created_at'];
    protected $fillable = [
        'description',
    ];
}
