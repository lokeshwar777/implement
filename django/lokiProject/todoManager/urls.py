from django.contrib import admin
from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.todoManagerApp, name="todo-app"),
    path('toggle/<int:id>', views.toggleComplete, name="toggle-complete"),
    path('update/<int:todoId>', views.updateTitle, name="update-todo"),
    path('delete/<int:id>', views.deleteTodo, name="delete-todo")
]
