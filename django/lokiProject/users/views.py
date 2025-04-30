from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib import messages
from django.contrib.auth import login, logout
from django.http import HttpResponseBadRequest


# Create your views here.


def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # form.save()
            login(request, form.save())
            messages.success(request, "User created successfully.")
            return redirect('posts:all_posts')
    else:
        form = UserCreationForm()
    return render(request, 'users/register.html', {'form': form})


def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            login(request, form.get_user())
            messages.success(request, "User logged in successfully.")
            if "next" in request.POST:
                return redirect(request.POST.get('next'))
            return redirect('posts:all_posts')
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', {'form': form})


def logout_view(request):
    if request.method == 'POST':
        logout(request)
        messages.success(request, "User logged out successfully.")
        return redirect('posts:all_posts')
    return HttpResponseBadRequest('Problem ocurred while logging out.')
