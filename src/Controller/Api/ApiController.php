<?php

namespace App\Controller\Api;

use App\Entity\Agency;
use App\Entity\Appointment;
use App\Entity\Category;
use App\Entity\City;
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
        $email = $request->get('email') ;
        $password = $request->get('password') ;
        if(!$email or !$password)
            return new JsonResponse(['success'=>false,'message'=>'email ou mot de passe non fourni']);
        return $userService->getUserBy($email,$password);
    }


    /**
     * @Route("/mobile/getcategoriesservices",name="categories_services_mobile")
     * @return Response
     */
    public function servicesCategories(Request $request)
    {
        $serialiser = new JsonSerialiser();
          $categories =  $this->getDoctrine()->getRepository(Category::class)
               ->findAll();
          $data = $serialiser->jsonSerialiser($categories);
        return new JsonResponse(['success'=>true,'data'=>$data]);
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
        $data = $serialiser->jsonSerialiser($services);
        return new JsonResponse(['success'=>true,'data'=>$data]);
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
     * @Route("/mobile/createrdv",name="create_rdv_mobile")
     * @return Response
     */
    public function cerateRdv(Request $request)
    {
        $date = $request->get('date_appointement');
        $period = $request->get('period');
        $description = $request->get('help');
        if(!$date || !$period || !$description)
            return new JsonResponse(['success'=>false,'message'=>'Informations pas fournit']);

        try {
            $entityManager = $this->getDoctrine()->getManager();
            $rdv = new Appointment();
            $rdv->setAppointementDate(new \DateTime($date));
            $rdv->setPeriod($period);
            $rdv->setHelpDescription($description);
            $entityManager->persist($rdv);
            $entityManager->flush();
            return new JsonResponse(['success'=>true,'message'=>'Rendevous bien enregistre']);
        }
        catch (\Exception $ex)
        {
            return new JsonResponse(['success'=>false,'message'=>$ex->getMessage()]);
        }
    }


    /**
     * @Route("/mobile/getcontratsbyuser",name="contrats_by_user_mobile")
     * @return Response
     */
    public function contratsByUser(Request $request)
    {
            
    }


}
