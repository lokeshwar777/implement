from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.todoManagerApp, name="todo-app"),
    path('toggle/<int:id>', views.toggleTodo, name="toggle-todo"),
    path('delete/<int:id>', views.deleteTodo, name="delete-todo")
]
