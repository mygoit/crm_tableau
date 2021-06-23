<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function getTicket(Request $request){
        return get_ticket($request->client_ip,$request->target_site);
    }
}
