<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Program;

class Home extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {   
        $programs = Program::all();
        
        $data = compact("programs");
        return view("home")->with($data);
    }
}
