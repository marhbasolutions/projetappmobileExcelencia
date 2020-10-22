<?php

namespace  App\Services;
use FOS\UserBundle\Model\UserManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Encoder\EncoderFactoryInterface;
use App\Services\JsonSerialiser;



class UserService
{
    private  $usermanager;

    private  $factory;

    public function __construct(UserManagerInterface $usermanager,EncoderFactoryInterface $factory)
    {
        $this->usermanager = $usermanager;
        $this->factory = $factory;
    }

    function  getUserBy($_email,$_password){

        $user = $this->usermanager->findUserByEmail($_email);


        // Check if the user exists !
        if(!$user){
            return
                ['success'=>false,'message'=>'Corones non correct'];
          
        }

        /// Start verification
        $encoder = $this->factory->getEncoder($user);
        $salt = $user->getSalt();

        if(!$encoder->isPasswordValid($user->getPassword(), $_password, $salt)) {
            return ['success'=>false,'message'=>'cordonnes non correct'];
        }

        /*
         * Now the user is authenticated !!!!
         * Do what you need to do now, like render a view, redirect to route etc.
         */
        return ['success'=>true,'user'=>['id'=>$user->getId(),'phone'=>$user->getPhone()]];
    }


}