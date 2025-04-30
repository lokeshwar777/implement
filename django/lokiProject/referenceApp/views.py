from django.shortcuts import render, get_object_or_404, redirect
from .models import Post
from .forms import PostForm, CreatePost
from django.http import HttpResponse, HttpResponseNotFound
from django.contrib.auth.decorators import login_required
from django.contrib import messages

# Create your views here.


def all_posts(request):
    posts = Post.objects.all()
    return render(request, 'posts/all_posts.html', {'posts': posts})


def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'posts/post_detail.html', {'post': post})


def post_page(request, slug):
    # return HttpResponse(slug)
    post = Post.objects.filter(slug=slug).first()
    if not post:
        return HttpResponseNotFound('Post Not Found')
    return render(request, 'posts/post_page.html', {'post': post})


def post_feed_view(request):
    feed = None
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.cleaned_data['post']
            feed = PostsFeed.objects.filter(posts=post)
    else:
        form = PostForm()
    return render(request, 'posts/post_feed.html', {'feed', feed})


@login_required(login_url='/users/login')
def post_create(request):
    if request.method == 'POST':
        form = CreatePost(request.POST, request.FILES)
        if form.is_valid():
            createdPost = form.save(commit=False)
            createdPost.author = request.user
            createdPost.save()
            messages.success(request, "Post created successfully.")
            return redirect('posts:all_posts')
    else:
        form = CreatePost()
    return render(request, 'posts/post_create.html', {'form': form})
