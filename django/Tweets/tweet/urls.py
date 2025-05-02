from django.urls import path
from . import views

app_name = 'tweet'

urlpatterns = [
    path('', views.tweet_home, name="home"),
    path("create", views.create_tweet, name="create"),
    path("tweets", views.tweet_list, name="tweet_list"),
    path("<int:tweetId>/edit", views.edit_tweet, name="edit"),
    path("<int:tweetId>/delete", views.delete_tweet, name="delete"),
    path("register", views.registerUser, name="register"),
    path("login", views.loginUser, name="login"),
]
