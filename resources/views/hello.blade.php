<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <title>Laravel Vue Element-Ui</title>
</head>
<body>
<div id="app">
    <div><span>Hello.blade.php</span></div>
    <example-component></example-component>
    <index-component></index-component>

</div>
<script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
<?php
die;
?>