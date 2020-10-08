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
            return new JsonResponse(
                ['success'=>false,'message'=>'Corones non correct'],
                200
            );
        }

        /// Start verification
        $encoder = $this->factory->getEncoder($user);
        $salt = $user->getSalt();

        if(!$encoder->isPasswordValid($user->getPassword(), $_password, $salt)) {
            return new JsonResponse(
                ['success'=>false,'message'=>'cordonnes non correct'],
                200
            );
        }

        /*
         * Now the user is authenticated !!!!
         * Do what you need to do now, like render a view, redirect to route etc.
         */
        $serialiser = new JsonSerialiser();
        $data = $serialiser->jsonSerialiser($user);
        return new JsonResponse(
            ['success'=>true,'user'=>$data],
            200
        );
    }


}