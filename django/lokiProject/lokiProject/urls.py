from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("__reload__/", include("django_browser_reload.urls")),
    path('', views.homePage, name="home"),
    path('about', views.about, name="about"),
    path('contact', views.contact, name="contact"),
    # same like router.route('/todo-app') in express
    path('todo-app/', include('todoManager.urls')),
    path('reference-app/', include('referenceApp.urls'))
    # config for uploading media
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
