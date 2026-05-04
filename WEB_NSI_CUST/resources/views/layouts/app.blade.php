<!DOCTYPE html>
<html>
<head>
    <title>WiFi Management</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    <style>
        body {
            background-color: #f5f7fa;
        }
        .navbar {
            background-color: #2563eb;
        }
        .navbar-brand {
            color: white !important;
            font-weight: bold;
        }
        .card {
            border: none;
            border-radius: 12px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.06);
        }
    </style>
</head>
<body>

<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="#">WiFi Management System</a>
    </div>
</nav>

<div class="container mt-5">
    @yield('content')
</div>

</body>
</html>