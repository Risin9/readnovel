<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <title>Laravel Vue Element-Ui</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
<div id="app">
    <login-component></login-component>
</div>
<script src="{{ mix('js/users/app.js') }}"></script>
</body>
</html>