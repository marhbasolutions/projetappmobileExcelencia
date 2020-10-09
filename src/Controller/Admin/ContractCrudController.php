<?php

namespace App\Controller\Admin;

use App\Entity\Contract;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;

class ContractCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Contract::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', '%entity_label_plural% listing')
            ->setEntityLabelInSingular('Contrat')
            ->setEntityLabelInPlural('Contrats')
        ;
    }


    public function configureFields(string $pageName): iterable
    {
        return [
            AssociationField::new('user','Client'),
        ];
    }

}
