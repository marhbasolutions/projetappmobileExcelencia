<?php

namespace App\Controller\Api;

use App\Entity\Agency;
use App\Entity\Appointment;
use App\Entity\Category;
use App\Entity\City;
use App\Entity\User;
use App\Entity\Service;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Services\UserService;
use App\Services\JsonSerialiser;
use Symfony\Component\Validator\Constraints\Date;


class ApiController extends  AbstractController
{
  
    
    /**
     * @Route("/mobile/login",name="auth_mobile")
     * @return Response
     */
    public function index(Request $request,UserService $userService)
    {

        try {
            $data = json_decode($request->getContent());
            $email = $data->email;
            $password = $data->password;
            $serialiser = new JsonSerialiser();
            if(!$email || !$password || $email == null || $password == null  )
                return new Response($serialiser->jsonSerialiser(['success'=>false,'message'=>'email ou mot de passe incorrect']));
            $data=  $userService->getUserBy($email,$password);
            return new Response($serialiser->jsonSerialiser($data));
        }
        catch (\Exception $ex)
        {
            return new Response($serialiser->jsonSerialiser(['success'=>false,'message'=>$ex->getMessage()]));
        }
        
    }

    /**
     * @Route("/mobile/createrdv",name="create_rdv_mobile")
     * @return Response
     */
    public function cerateRdv(Request $request)
    {
        $data = json_decode($request->getContent());

        if($data)
        {
            $period = isset($data->period) ? $data->period:null;
            $date = isset($data->date) ? $data->date:null;
            $user =  isset($data->user) ? $data->user:null;
            $description = isset($data->description) ? $data->description:null;

            $serialiser = new JsonSerialiser();

            if(is_null($period))
                return new Response($serialiser->jsonSerialiser(['success'=>false,'message'=>'period non specifie']));

            if(is_null($date))
                return new Response($serialiser->jsonSerialiser(['success'=>false,'message'=>'date non specifie']));

            if(is_null($user))
                return new Response($serialiser->jsonSerialiser(['success'=>false,'message'=>'utilisateur non specifie']));

            $user = $this->getDoctrine()->getRepository(User::class)->find($user);

            if(!$user)
                return new Response($serialiser->jsonSerialiser(['success'=>false,'message'=>'utilisateur non trouve']));


            try {
                $entityManager = $this->getDoctrine()->getManager();
                $rdv = new Appointment();
                $rdv->setAppointementDate(new \DateTime($date));
                $rdv->setPeriod($period);
                $rdv->setHelpDescription($description);
                $rdv->setUser($user);
                $entityManager->persist($rdv);
                $entityManager->flush();
                $data = $serialiser->jsonSerialiser(['success'=>true,'message'=>'Rendevous bien enregistre']);
                return new Response($data);
            }
            catch (\Exception $ex)
            {
                $data = $serialiser->jsonSerialiser(['success'=>false,'message'=>$ex->getMessage()]);
                return new Response($data);
            }
        }
    }


    /**
     * @Route("/mobile/getcategoriesservices",name="categories_services_mobile")
     * @return Response
     */
    public function servicesCategories(Request $request)
    {
        $serialiser = new JsonSerialiser();
          $categories =  $this->getDoctrine()->getRepository(Category::class)
               ->findAllCategories();
          $data = $serialiser->jsonSerialiser(['success'=>true,'data'=>$categories]);
          
        return new Response($data);
    }

    /**
     * @Route("/mobile/getservicesbycategory",name="services_by_categorie_mobile")
     * @return Response
     */
    public function servicesByCategory(Request $request)
    {
        $category = $request->get('category');
        if(!$category || $category == null )
            return new JsonResponse(['success'=>false,'message'=>'Aucune categorie fournite']);

        $serialiser = new JsonSerialiser();
        $services =  $this->getDoctrine()->getRepository(Service::class)
            ->findBy(['category'=>$category]);
        $data = $serialiser->jsonSerialiser(['success'=>true,'data'=>$services]);
        return new Response($data);
    }

    /**
     * @Route("/mobile/getagencies",name="agencies_mobile")
     * @return Response
     */
    public function agencies(Request $request)
    {
        $serialiser = new JsonSerialiser();
        $agencies =  $this->getDoctrine()->getRepository(Agency::class)
            ->findAll();
        $data = $serialiser->jsonSerialiser($agencies);
        return new JsonResponse(['success'=>true,'data'=>$data]);
    }


    /**
     * @Route("/mobile/getnumberagenciesbycity",name="number_agencies_by_city_mobile")
     * @return Response
     */
    public function numberAgenciesByCity(Request $request)
    {
        $serialiser = new JsonSerialiser();
        $agencies =  $this->getDoctrine()->getRepository(Agency::class)
            ->getAgenciesByCity();
        $data = $serialiser->jsonSerialiser($agencies);
        return new JsonResponse(['success'=>true,'data'=>$data]);
    }


    /**
     * @Route("/mobile/getagenciesbycity",name="agencies_by_city_mobile")
     * @return Response
     */
    public function agenciesByCity(Request $request)
    {
        $city = $request->get('city');
        if(!$city || $city == null)
            return new JsonResponse(['success'=>false,'message'=>'Aucune ville fournite']);
        $serialiser = new JsonSerialiser();
        $city =  $this->getDoctrine()->getRepository(City::class)
            ->find($city);
        if(!$city || $city == null)
            return new JsonResponse(['success'=>false,'message'=>'Ville non trouve']);

        $data = $serialiser->jsonSerialiser($city->getAgencies());
        return new JsonResponse(['success'=>true,'data'=>$data]);
    }

    /**
     * @Route("/mobile/getcontratsbyuser",name="contrats_by_user_mobile")
     * @return Response
     */
    public function contratsByUser(Request $request)
    {
        
        
        
    }


}
