<?php

namespace App\Controller\Admin;

use App\Entity\News;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class NewsCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return News::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des %entity_label_plural%')
            ->setEntityLabelInSingular('Article')
            ->setEntityLabelInPlural('Articles')
            ;
    }

    

    public function configureFields(string $pageName): iterable
    {
        $imageFile = ImageField::new('thumbnailFile','Image')->setFormType(VichImageType::class);
        $image = ImageField::new('thumbnail','Image')->setBasePath('/images/news');
        $fields = [
            TextField::new('title','Titre'),
            TextEditorField::new('content','Contennu'),
            AssociationField::new('category','Categorie')->autocomplete(),
            AssociationField::new('publisher','Propietaire')->hideOnForm(),
            DateTimeField::new('published_at','Publie le')->formatValue(function($value){
                return date('d-m-Y h:i:s',strtotime($value));
            })->hideOnForm()
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
