from django.shortcuts import render


def postList(request):
    return render(request, 'posts/postList.html')
