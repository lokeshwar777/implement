from django.shortcuts import render, get_object_or_404
from .models import Post
from .forms import PostForm
from django.http import HttpResponse, HttpResponseNotFound

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
    return render(request, 'post/post_feed.html', {'feed', feed})
