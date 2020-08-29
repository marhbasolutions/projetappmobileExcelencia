<?php


namespace App\Listeners;

use App\Entity\News;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;


class AddedNewsListener implements EventSubscriberInterface
{
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityPersistedEvent::class => ['setPublisher']
        ];
        // TODO: Implement getSubscribedEvents() method.
    }

    public function setPublisher(BeforeEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();
        if($entity instanceof  News)
        {
            $user = $this->container->get('security.token_storage')->getToken()->getUser();
            $entity->setPublisher($user);
            $entity->setPublishedAt(new \DateTime());
        }
    }
}