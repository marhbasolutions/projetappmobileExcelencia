<?php

namespace App\Controller\Admin;

use App\Entity\Contribution;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ContributionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Contribution::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', '%entity_label_plural% listing')
            ->setEntityLabelInSingular('Cotisation')
            ->setEntityLabelInPlural('Cotisations')
            ;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name','Nom'),
            NumberField::new('montant','Montant'),
        ];
    }
}
