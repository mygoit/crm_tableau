<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index(){

        $client_ip = env('CLIENT_IP','27.72.105.188');
        $target_site = '';
        $ticket = get_ticket($client_ip,$target_site);
        // $ticket = 'M47xgN2jTjm3dWBidJYtSQ==:z-xEsOgXkGNbMxyWuU39w_3T';
        $path = 'trusted/'.$ticket.'/views/BC47/TDTHKeHoachtheoKhi';//dd($path);
        $src = 'http://171.244.2.102:8851/trusted/'.$ticket.'/views/BC47/TDTHKeHoachtheoKhi?:embed=yes';
        
        return view('test',['ticket'=>$ticket,'path'=>$path,'src'=>$src]);
    }
}
