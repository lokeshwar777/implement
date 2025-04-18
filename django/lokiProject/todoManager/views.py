from django.shortcuts import render
from todoManager.models import Todo
from todoManager.forms import TodoForm


def todoApp(request):
    todos = Todo.objects.all()
    # if this is a POST request we need to process the form data
    if request.method == "POST":
        # create a form instance and populate it with data from the request:
        form = TodoForm(request.POST)
        # check whether it's valid and save:
        if form.is_valid():
            form.save()
    else:
        form = TodoForm()

    return render(request, 'todo-app.html', {'todos': todos, 'form': form})
