<?php

namespace App\Controller\Admin;

use App\Entity\Appointment;
use App\Entity\Category;
use App\Entity\Comment;
use App\Entity\News;
use App\Entity\NewsCategory;
use App\Entity\Quote;
use App\Entity\Service;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Router\CrudUrlGenerator;
use App\Controller\Admin\UserCrudController;
use App\Controller\Admin\ServiceCrudController;
use App\Controller\Admin\AppointmentCrudController;
use App\Controller\Admin\ContractCrudController;
use App\Controller\Admin\NewsCrudController;
use App\Controller\Admin\QuoteCrudController;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/", name="admin")
     */
    public function index(): Response
    {
        // redirect to some CRUD controller
        $routeBuilder = $this->get(CrudUrlGenerator::class)->build();

        return $this->redirect($routeBuilder->setController(UserCrudController::class)->generateUrl());
    }

    public function configureAssets(): Assets
    {
        return Assets::new()->addCssFile('css/admin.css');
    }
  

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('<div style="background-color: #242c62;"> <img class="img-fluid" src="http://excel-assurance.com/wp-content/uploads/2019/08/logo_excel-assur_v2_2_275px.png" width="200" /></div>')
            ->setTranslationDomain('admin');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');

        yield MenuItem::subMenu('Services', 'fa fa-cogs')->setSubItems([
            MenuItem::linkToCrud('Liste', 'fa fa-cube', Service::class),
            MenuItem::linkToCrud('Categorie', 'fa fa-bars', Category::class),
        ]);

        yield MenuItem::subMenu('Actualites', 'fa fa-rss')->setSubItems([
            MenuItem::linkToCrud('Articles', 'fa fa-newspaper-o', News::class),
            MenuItem::linkToCrud('Categories', 'fa fa-bars', NewsCategory::class),
            MenuItem::linkToCrud('Commentaires', 'fa fa-comments-o', Comment::class)
        ]);

        yield MenuItem::linkToCrud('Rendez-vous', 'fa fa-calendar', Appointment::class);
        yield MenuItem::linkToCrud('Devis', 'fa fa-file', Quote::class);
    }
}
