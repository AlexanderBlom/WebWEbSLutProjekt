<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Chord;

class ChordsController extends Controller
{
    //
    public function get($id) {
        $chord = \App\Project::find($id);
        return $chord;
    }
}
