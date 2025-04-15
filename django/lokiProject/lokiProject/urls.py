from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homePage, name="home"),
    path('about', views.about, name="about"),
    path('contact', views.contact),
    path('postList', include('lokiApp.urls'))
]
