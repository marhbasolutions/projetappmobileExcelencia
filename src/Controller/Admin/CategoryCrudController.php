<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\ColorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class CategoryCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Category::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des %entity_label_plural%')
            ->setEntityLabelInSingular('Categorie service')
            ->setEntityLabelInPlural('categories services')
        ;
    }

    public function configureFields(string $pageName): iterable
    {
        $imageFile = ImageField::new('thumbnailFile','Image')->setFormType(VichImageType::class);
        $image = ImageField::new('thumbnail','Image')->setBasePath('/images/services/category');
        $fields =   [
            TextField::new('name','Nom'),
            ColorField::new('color','Coleur arriere plan'),
             TextField::new('icon','icon')->setHelp('Choisir une icon de <a target="_blank" href="https://materialdesignicons.com">https://materialdesignicons.com</a>'),
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

}
