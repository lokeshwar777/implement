from django.shortcuts import render, get_object_or_404, redirect
from todoManager.models import Todo
from todoManager.forms import TodoForm
from django.http import JsonResponse
import json


def todoManagerApp(request):
    todos = Todo.objects.all()
    # if this is a POST request we need to process the form data
    if request.method == "POST":
        # create a form instance and populate it with data from the request:
        form = TodoForm(request.POST)
        # check whether it's valid and save:
        if form.is_valid():
            form.save()
            # print('redirect after save')
    #         redirect('todo-app')
    # else:
    #     form = TodoForm()
    # TODO : check why the above approach is not working

    # reset the fields (not recommended)
    form = TodoForm()

    return render(request, 'todoManager/index.html', {'todos': todos, 'form': form})


def toggleComplete(request, id):
    todo = get_object_or_404(Todo, pk=id)
    # print('todo is', todo)
    if request.method == "POST":
        todo.completed = not todo.completed
        todo.save()
        return JsonResponse({'completed': todo.completed})
    return JsonResponse({'error': 'Invalid request'}, status=400)


def deleteTodo(request, id):
    todo = get_object_or_404(Todo, pk=id)
    # print('todo is', todo)
    if request.method == "DELETE":
        todo.delete()
        return JsonResponse({'message': 'Todo deleted successfully'})
    return JsonResponse({'error': 'Invalid request'}, status=400)


def updateTitle(request, todoId):
    todo = get_object_or_404(Todo, pk=todoId)
    # print('todo is', todo)
    data = json.loads(request.body)
    newTitle = data.get('newTitle')
    # print(newTitle)
    if request.method == "POST":
        todo.title = newTitle
        todo.save()
        return JsonResponse({'message': 'title updated'})
    return JsonResponse({'error': 'Invalid request'}, status=400)
