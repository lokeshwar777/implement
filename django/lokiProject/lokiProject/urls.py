from django.contrib import admin
from django.urls import include, path, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("__reload__/", include("django_browser_reload.urls")),
    path('', views.homePage, name="home"),
    path('about', views.about, name="about"),
    path('contact', views.contact, name="contact"),
    # same like router.route('/todo-app') in express
    path('todo-app/', include('todoManager.urls')),
    path('reference-app/', include('referenceApp.urls')),
    path('users/', include('users.urls')),
    # config for uploading media
    # comment this if you are using serve
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
