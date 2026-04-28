<?php

require __DIR__.'/vendor/autoload.php';
$app = require_once __DIR__.'/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

// Create request to login
$request = Illuminate\Http\Request::create('/login', 'POST', [
    'email' => 'admin@vortex.com',
    'password' => 'password123',
]);
$request->headers->set('X-Inertia', 'true');

$response = $kernel->handle($request);

echo "Status: " . $response->getStatusCode() . "\n";
echo "Headers: \n" . $response->headers . "\n";
echo "Content: " . substr($response->getContent(), 0, 500) . "\n";
