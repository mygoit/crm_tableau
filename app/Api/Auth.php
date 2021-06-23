<?php
namespace App\Api;
use App\Api\Base;
/**
 *
 */
class Auth extends Base
{

    protected $_params;
    public function __construct($params = []) {
        parent::__construct();
        $this->_params = $params;
    }

    public function login(){
        $response = $this->request(config('api.login'),'json',$this->_params);
        return $this->responseData($response);
    }

    public function logout(){
        $response = $this->request(config('api.logout'),'put',$this->_params);
        return $this->responseData($response);
    }

    public function getUserDetail(){
        return $this->responseData($this->request(config('api.user_info'),'get',[],$this->_params));
    }

    public function switchRole(){
        return $this->responseData($this->request(config('api.switch_role'),'put',[],$this->_params));
    }
}
