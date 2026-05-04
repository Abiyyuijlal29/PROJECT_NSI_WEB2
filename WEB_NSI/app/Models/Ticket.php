<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    protected $fillable = [
        'ticket_number', 'customer_id', 'category', 'priority', 'status', 'technician'
    ];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }
}
