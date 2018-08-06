<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PersonalCategory extends Model
{
    // Enable soft delete to avoid drop data
    use SoftDeletes;

    /*
     * Model: PersonalCategory
     * This model represent a category of personal (med, nurse)
     * Table: personal_personalcategory; Schema: public
     */
    protected $table = 'personal_personalcategory';
    protected $primaryKey = 'id';
    protected $dates = ['deleted_at', 'created_at'];
    protected $fillable = [
        'description',
    ];
}
