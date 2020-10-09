<?php

namespace App\Entity;

use App\Repository\CommentRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CommentRepository::class)
 */
class Comment
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $published_at;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="comments")
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    private $publisher;

    /**
     * @ORM\Column(type="text")
     */
    private $content;

    /**
     * @ORM\ManyToOne(targetEntity=Comment::class, inversedBy="comment_replies")
     * @ORM\JoinColumn(onDelete="SET NULL")
     */
    private $comment;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="comment")
     */
    private $comment_replies;

    /**
     * @ORM\ManyToOne(targetEntity=News::class, inversedBy="comments")
     */
    private $news;

    public function __construct()
    {
        $this->comment_replies = new ArrayCollection();
    }

    public function getComment(): ?self
    {
        return $this->comment;
    }

    public function setComment(?self $comment): self
    {
        $this->comment = $comment;

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getCommentReplies(): Collection
    {
        return $this->comment_replies;
    }

    public function addCommentReply(self $commentReply): self
    {
        if (!$this->comment_replies->contains($commentReply)) {
            $this->comment_replies[] = $commentReply;
            $commentReply->setComment($this);
        }

        return $this;
    }

    public function removeCommentReply(self $commentReply): self
    {
        if ($this->comment_replies->contains($commentReply)) {
            $this->comment_replies->removeElement($commentReply);
            // set the owning side to null (unless already changed)
            if ($commentReply->getComment() === $this) {
                $commentReply->setComment(null);
            }
        }

        return $this;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPublishedAt(): ?\DateTimeInterface
    {
        return $this->published_at;
    }

    public function setPublishedAt(\DateTimeInterface $published_at): self
    {
        $this->published_at = $published_at;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getPublisher(): ?User
    {
        return $this->publisher;
    }

    public function setPublisher(?User $publisher): self
    {
        $this->publisher = $publisher;

        return $this;
    }

    public function getNews(): ?News
    {
        return $this->news;
    }

    public function setNews(?News $news): self
    {
        $this->news = $news;

        return $this;
    }

    public function __toString()
    {
        // TODO: Implement __toString() method.
        return $this->content;
    }


}
