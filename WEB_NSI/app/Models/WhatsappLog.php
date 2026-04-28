<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class WhatsappLog extends Model
{
    protected $fillable = ['type', 'message', 'recipient_number', 'sent_at'];

    protected $casts = [
        'sent_at' => 'datetime',
    ];
}
