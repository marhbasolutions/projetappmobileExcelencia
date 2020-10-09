<?php

namespace App\Controller\Admin;

use App\Entity\Service;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ServiceCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Service::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $imageFile = ImageField::new('thumbnailFile','Image')->setFormType(VichImageType::class);
        $image = ImageField::new('thumbnail','Image')->setBasePath('/images/services');

        $fields = [
            TextField::new('name','Nom de service'),
            TextEditorField::new('description','Description'),
            BooleanField::new('is_professional','Particulier/Entrepirse'),
            AssociationField::new('category','Categorie service')
            ->autocomplete()
        ];

        if($pageName == Crud::PAGE_INDEX || $pageName == Crud::PAGE_DETAIL )
        {
            $fields[] = $image;
        }
        else {
            $fields[] = $imageFile;
        }
        return $fields;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des %entity_label_plural%')
            ->setEntityLabelInSingular('Service')
            ->setEntityLabelInPlural('Services')
        ;
    }

    
}
