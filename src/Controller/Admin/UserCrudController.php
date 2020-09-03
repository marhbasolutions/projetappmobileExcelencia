<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Action;
use EasyCorp\Bundle\EasyAdminBundle\Config\Actions;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    /*public function configureActions(Actions $actions): Actions
    {
        return $actions
            ->setPermission(Action::INDEX, 'ROLE_ADMIN')
            ->setPermission(Action::NEW, 'ROLE_SUPER_ADMIN')
            ;
    }*/

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setPageTitle('index', 'Liste des %entity_label_plural%')
            ->setEntityLabelInSingular('utilisateur')
            ->setEntityLabelInPlural('utilisateurs')
            ;
    }

    public function configureFields(string $pageName): iterable
    {
        return  [
            TextField::new('firstName','Prenom'),
            TextField::new('lastName','Nom'),
            TextField::new('username','Login'),
            EmailField::new('email','Email'),
            ArrayField::new('roles','Roles')->formatValue(function($roles){
                $roles = explode(',',$roles);
                if(!($roles) || count($roles) == 0) return 'Utilisateur';
                $resultRoles = [];
                foreach ($roles as $r)
                {
                    if($r == 'ROLE_USER')
                        $resultRoles[]= 'Utilisateur';

                    if($r == 'ROLE_ADMIN')
                           $resultRoles[]= 'Administrateur';

                    if($r == 'ROLE_SUPER_ADMIN')
                           $resultRoles[]= 'Super administrateur';

                    if($r == 'ROLE_SECRETAIRE')
                           $resultRoles[]= 'secretaire';
                }
                return implode(",",$resultRoles);
            })
        ];
    }
}
