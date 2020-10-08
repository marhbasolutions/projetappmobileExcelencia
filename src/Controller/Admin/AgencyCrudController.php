<?php

namespace App\Controller\Admin;

use App\Entity\Agency;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class AgencyCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Agency::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des %entity_label_plural%')
            ->setEntityLabelInSingular('Agence')
            ->setEntityLabelInPlural('Agences')
            ;
    }

    public function configureFields(string $pageName): iterable
    {
        return  [
            TextField::new('name','Nom agence'),
            TextField::new('adress','Adress agence'),
            TextField::new('phone','Telephone'),
            TextField::new('email_adress','Adresse email'),
            AssociationField::new('city','Ville'),
        ];
    }
}
