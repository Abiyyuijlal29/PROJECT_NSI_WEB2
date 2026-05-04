@extends('layouts.app')

@section('content')

<div class="card p-4">
    <h3 class="fw-bold mb-4">Tambah Customer</h3>

    <form action="{{ route('customers.store') }}" method="POST">
        @csrf

        <div class="mb-3">
            <label class="form-label">Nama</label>
            <input type="text" name="nama" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Alamat</label>
            <textarea name="alamat" class="form-control" required></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">No HP</label>
            <input type="text" name="no_hp" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Paket</label>
            <select name="package_id" class="form-select" required>
                <option value="">-- Pilih Paket --</option>
                @foreach($packages as $package)
                    <option value="{{ $package->id }}">
                        {{ $package->nama_paket }} ({{ $package->kecepatan }})
                    </option>
                @endforeach
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label">Status</label>
            <select name="status" class="form-select">
                <option value="aktif">Aktif</option>
                <option value="nonaktif">Nonaktif</option>
            </select>
        </div>

        <button type="submit" class="btn btn-primary">Simpan</button>
        <a href="/customers" class="btn btn-secondary">Kembali</a>

    </form>
</div>

@endsection