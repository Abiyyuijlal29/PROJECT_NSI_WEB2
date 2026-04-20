<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'packet_id', 'name', 'speed', 'price', 
        'bandwidth_up', 'bandwidth_down', 'status', 
        'color_theme', 'icon', 'subscribers'
    ];
}
