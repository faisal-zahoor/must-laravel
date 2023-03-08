<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Route::get('about', function () {
    return view('about');
});

Route::get('vision-and-mission', function () {
    return view('vision-mission');
});

Route::get('leadership', function () {
    return view('leadership');
});

Route::get('introduction', function () {
    return view('introduction');
});

Route::get('governance', function () {
    return view('governance');
});

Route::get('academics', function () {
    return view('programs');
});

Route::get('coming-soon', function () {
    return view('coming-soon');
});

Route::get('contact-us', function () {
    return view('contact-us');
});

Route::get('program', function () {
    return view('degree-overview');
});

Route::get('event', function () {
    return view('event');
});

Route::get('fee-structure', function () {
    return view('fee-structure');
});

Route::get('carears', function () {
    return view('jobs');
});

Route::get('policies', function () {
    return view('policies');
});

Route::get('apply-now', function () {
    return view('apply-now');
});
