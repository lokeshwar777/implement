from django.shortcuts import render, get_object_or_404, redirect
from todoManager.models import Todo
from todoManager.forms import TodoForm
from django.http import JsonResponse


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


def toggleTodo(request, id):
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
