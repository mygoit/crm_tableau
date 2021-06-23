<?php

if(!function_exists('get_ticket')){
    function get_ticket($client_ip,$target_site){
        $response = -1;
        $params = [
            'username' => env('TABLEAU_USERNAME'),
            'client_ip' => $client_ip??env('CLIENT_IP','27.72.105.188'),
            'target_site' => $target_site
        ];
        try {
            $curl = curl_init();

            curl_setopt_array($curl,[
                CURLOPT_URL => env('TABLEAU_URL','http://171.244.2.102:8851/trusted'),
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 30,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => http_build_query($params),
                CURLOPT_HTTPHEADER => [
                    'Content-Type: application/x-www-form-urlencoded'
                ]
            ]);
            $response = curl_exec($curl);
            curl_close($curl);
        } catch (\Exception $e) {}

        return $response;
    }
}
