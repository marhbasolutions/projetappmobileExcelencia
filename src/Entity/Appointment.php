<?php

namespace App\Entity;

use App\Repository\AppointmentRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=AppointmentRepository::class)
 */
class Appointment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="appointments")
     */
    private $user;

    /**
     * @ORM\Column(type="date")
     */
    private $appointement_date;

    /**
     * @ORM\Column(type="string", length=15, nullable=true)
     */
    private $state;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $period;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $help_description;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getAppointementDate(): ?\DateTimeInterface
    {
        return $this->appointement_date;
    }

    public function setAppointementDate(\DateTimeInterface $appointement_date): self
    {
        $this->appointement_date = $appointement_date;

        return $this;
    }

    public function getState(): ?string
    {
        return $this->state;
    }

    public function setState(?string $state): self
    {
        $this->state = $state;

        return $this;
    }

    public function getPeriod(): ?int
    {
        return $this->period;
    }

    public function setPeriod(?int $period): self
    {
        $this->period = $period;

        return $this;
    }

    public function getHelpDescription(): ?string
    {
        return $this->help_description;
    }

    public function setHelpDescription(?string $help_description): self
    {
        $this->help_description = $help_description;

        return $this;
    }
}
