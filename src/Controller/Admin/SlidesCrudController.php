<?php

namespace App\Controller\Admin;

use App\Entity\Slides;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class SlidesCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Slides::class;
    }

    public function configureFields(string $pageName): iterable
    {
        $imageFile = ImageField::new('thumbnailFile','Image')->setFormType(VichImageType::class);
        $image = ImageField::new('thumbnail','Image')->setBasePath('/images/news');

        $fields = [
            TextField::new('name','Lien '),
            TextEditorField::new('description'),
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
}
