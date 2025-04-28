from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.


class Post(models.Model):
    POST_TYPE_CHOICE = [
        ('R', 'REEL'),
        ('P', 'PICS'),
        ('A', 'ALBUM')
    ]
    name = models.CharField(max_length=50)
    likes = models.PositiveIntegerField()
    date_posted = models.DateTimeField()
    slug = models.SlugField()
    image = models.ImageField(upload_to='posts/')
    date_added = models.DateTimeField(default=timezone.now)
    type = models.CharField(max_length=2, choices=POST_TYPE_CHOICE)
    description = models.TextField(default='')


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
