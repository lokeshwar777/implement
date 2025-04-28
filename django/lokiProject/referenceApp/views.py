from django.shortcuts import render, get_object_or_404
from .models import Post
from .forms import PostForm

# Create your views here.


def all_posts(request):
    posts = Post.objects.all()
    return render(request, 'post/all_posts.html', {'posts': posts})


def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'post/post_detail.html', {'post': post})


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
