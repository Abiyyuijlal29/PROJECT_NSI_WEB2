<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = ['name', 'tier', 'avatar_url'];

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
