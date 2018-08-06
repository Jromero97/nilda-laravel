<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Personal extends Model
{
    // Enable soft delete to avoid drop data
    use SoftDeletes;

    /*
     * Model: Personal
     * This model represent an hospital personal.
     * Table: personal_personal; Schema: public
     */
    protected $table = 'personal_personal';
    protected $primaryKey = 'id';
    protected $dates = ['deleted_at', 'created_at'];
    protected $fillable = [
        'first_name',
        'last_name',
        'address1',
        'address2',
        'telephone',
        'email',
        'personal_personalcategory_id',
    ];

}
