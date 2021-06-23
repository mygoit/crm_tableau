<?php
namespace App\Api;
use App\Api\Base;

/**
 *
 */
class SystemUser extends Base
{

    protected $_params;
    public function __construct($params = []) {
        parent::__construct();
        $this->_params = $params;
    }

    public function getShopByUser(){
        return $this->responseData($this->request(config('api.get_user_shop'),'get',[],$this->_params,session()->get('access_token_app')));
    }

    public function getRoleByUser(){
        return $this->responseData($this->request(config('api.get_role'),'get',[],$this->_params,session()->get('access_token_app')));
    }

    public function getUser(){
        return $this->responseData($this->request(config('api.fetch_sys_user'),'json',$this->_params,[],session()->get('access_token_app')));
        // return $this->responseData($this->request(config('api.fetch_sys_user'),'json',$this->_params,[],'b888fd17-7915-40b2-9d67-10b4a46b13e3'));
    }

    public function create(){
        return $this->responseData($this->request(config('api.create_sys_user'),'json',$this->_params,[],session()->get('access_token_app')));
    }

    public function update(){
        return $this->responseData($this->request(config('api.update_sys_user'),'json',$this->_params,[],session()->get('access_token_app')));
    }

    public function updateRole(){
        return $this->responseData($this->request(config('api.role_up_sys_user'),'json',$this->_params,[],session()->get('access_token_app')));
    }

    public function updatePassword(){
        return $this->responseData($this->request(config('api.password_up_sys_user'),'json',$this->_params,[],session()->get('access_token_app')));
    }

    public function lockUser($isLock = false){
        $endpoint = $isLock ? config('api.lock_sys_user') : config('api.unlock_sys_user');
        return $this->responseData($this->request($endpoint,'json',$this->_params,[],session()->get('access_token_app')));
    }
}
