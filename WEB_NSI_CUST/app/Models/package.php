<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Package extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_paket',
        'kecepatan',
        'harga',
        'deskripsi'
    ];

    public function customers()
    {
        return $this->hasMany(Customer::class);
    }
}