<?php
namespace App\Api;
use GuzzleHttp\Client;
/**
*
*/
class Base
{
    private $_header = [
        'Content-Type'  => 'application/x-www-form-urlencoded',
    ];
    private $_client = null;
    protected $_apiUrl;
    private $_method = ['GET','POST','PUT','PATCH','DELETE','JSON', 'PUT_JSON'];
    public function __construct() {
        if(!$this->_apiUrl){
            $this->_apiUrl = config('app.api_url');
        }
        $this->_client = new Client(['base_uri' => $this->_apiUrl]);
    }
    /**
    * Set header request
    *
    * @param [type] $param
    * @return void
    */
    public function setHeader($param,$map=true) {
        if($map){
            $this->_header = array_merge($this->_header,$param);
        }else{
            $this->_header = $param;
        }
    }
    /**
    * Get header
    *
    * @return void
    */
    private function getHeader() {
        return $this->_header;
    }
    /**
    * Set Authorization
    *
    * @param [type] $token
    * @return void
    */
    public function setAuthorization($token) {
        $this->_header['Authorization'] = 'Bearer ' . $token;
    }
    public function setApiUrl($url='') {
        if($url) {
            $this->_client = new Client(['base_uri' => $url]);
        }
    }
    public function request($endPoint,$method = 'get',$body = [],$params = [],$token=''){

        $method = in_array(strtoupper($method),$this->_method) ? strtoupper($method) : 'GET';
        $return = (object)[];
        $return->statusCode = 500;
        $return->refresh_token = false;
        if(session('access_info')){
            $this->_header['Authorization'] = 'Bearer '. session('access_info')->access_token;
        }
        if ($token) {
            $this->_header['Authorization'] = 'Bearer '. $token;
        }
        $option = [
            'headers' => $this->getHeader(),
            'http_errors'=>false,
            'query' => $params
        ];
        if($body){
            if($method=='JSON'){
                $method = 'POST';
                $option['json'] = $body;
            }else if($method == 'PUT_JSON') {
                $method = 'PUT';
                $option['json'] = $body;
            }else {
                $option['form_params'] = $body;
            }
        }
        // dd($option);
        try {
            $response = $this->_client->request(strtoupper($method),$endPoint,$option);

            $statusCode = $response->getStatusCode();
            $body = $response->getBody()->getContents();
            $return = (strlen($body)) ? json_decode($body) : (object)[];
            $return->statusCode = $statusCode;
            $return->refresh_token = (isset($return->status->code) && $return->status->code == '021201') ? true : false;
            if($return->refresh_token){
                if($this->refresh_token()){
                    $response = $this->_client->request(strtoupper($method),$endPoint,$option);
                    $statusCode = $response->getStatusCode();
                    $body = $response->getBody()->getContents();
                    $return = (strlen($body)) ? json_decode($body) : (object)[];
                    $return->statusCode = $statusCode;
                }
            }
        } catch (\Exception $e) {}
            return $return;
        }
        public function responseData($response){
            $return = [
                'status' => 400,
                'error' => true,
                'message' => 'Hệ thống đang bận vui lòng thử lại sau.',
                'data' => [],
                'errorCode' => '500',
                'logout' => false,
                'refresh_token' => false
            ];
            if(is_object($response)){
                $return['status'] = isset($response->statusCode) ? $response->statusCode : 400;
                $return['error'] = (isset($response->status->code) && strtoupper($response->status->code) == 'SUCCESS') || (isset($response->error) && !$response->error) ? false : true;
                $return['message'] = isset($response->status->message) ? $response->status->message : '';
                $return['data'] = isset($response->data) ? $response->data : [];
                $return['errorCode'] =  isset($response->status->code) ? $response->status->code : '';
            }
            if(in_array($return['errorCode'],['021201','021003'])=='021201'){
                $return['refresh_token'] =  true;
            }
            return $return;
        }
        public function refresh_token(){
            $done = 0;
            try {
                $params = [
                    'mobile_number' => session('user_info')->mobile_number,
                    'mobile_number_code' => config('app.number_code'),
                    'otp' => '',
                    'refresh_token' => session('access_info')->refresh_token,
                    'device_token' => '',
                    'device_type' => 1,
                    'app_name' => config('app.name'),
                    'app_version' => config('app.app_version'),
                    'grant_type' => 'refresh_token',
                    'app_type' => config('app.app_type')
                ];
                $rs = $this->_client->request('POST',config('api.login'),[
                    'headers' => $this->getHeader(),
                    'http_errors'=>false,
                    'json' => $params
                ]);
                $body = $rs->getBody()->getContents();
                $response = (strlen($body)) ? json_decode($body) : (object)[];
                if($response->status->code == 'success'){
                    session(['access_info'=>$response['data']]);
                    if(isset($this->_header['Authorization'])){
                        $this->_header['Authorization'] = 'Bearer '. session('access_info')->access_token;
                    }
                    $done = 1;
                }else{
                    session(['access_info'=>null]);
                    session(['user_info'=>null]);
                    session(['storages'=>[]]);
                    $done = 0;
                }
            } catch (\Exception $e) {}
            return $done;
        }
    }
