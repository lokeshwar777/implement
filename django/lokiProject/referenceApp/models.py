from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from django.utils.text import slugify


# Create your models here.


class Post(models.Model):
    POST_TYPE_CHOICE = [
        ('R', 'REEL'),
        ('P', 'PICS'),
        ('A', 'ALBUM')
    ]
    name = models.CharField(max_length=50)  # or title
    description = models.TextField(default='')  # or body
    slug = models.SlugField(unique=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    # date_posted = models.DateTimeField()
    date_added = models.DateTimeField(default=timezone.now)
    likes = models.PositiveIntegerField(default=0)
    image = models.ImageField(
        upload_to='posts/', blank=True, null=True, default='fallback.png')  # optional
    type = models.CharField(
        max_length=2, choices=POST_TYPE_CHOICE, default='P')
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, default=None)

    # GPT
    def save(self, *args, **kwargs):  # auto creation of slug from name if blank
        if not self.slug:
            base_slug = slugify(self.name)
            unique_slug = base_slug
            counter = 0
            while Post.objects.filter(slug=unique_slug).exists():
                counter += 1
                unique_slug = f"{base_slug}-{counter}"
            self.slug = unique_slug
        super().save(*args, **kwargs)


# One to Many

class PostReview(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    date_added = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.user.username} review for {self.post.name}'


# Many to Many
# posts = models.ManyToManyField(Post, related_name='')

# One to One
# posts = models.OneToOneField(Post, on_delete=models.CASCADE, related_name='')

# TODO : Many to One (first check whether it exists)
