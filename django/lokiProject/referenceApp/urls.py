from django.urls import path
from . import views

app_name = 'posts'  # registered namespace

urlpatterns = [
    path('', views.all_posts, name='all_posts'),
    path('<int:post_id>/', views.post_detail, name="post_detail"),
    path('new-post', views.post_create, name="new-post"),
    path('<slug:slug>', views.post_page, name="post_page"),  # dynamic routing

]
