from django.shortcuts import render, get_object_or_404, redirect
from .models import Tweet
from .forms import TweetForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login

# Create your views here.


def tweet_home(request):
    return render(request, 'tweet_home.html')


def tweet_list(request):
    tweets = Tweet.objects.all().order_by('-created_at')
    return render(request, 'tweet_list.html', {'tweets': tweets})


@login_required
def create_tweet(request):
    if request.method == 'POST':
        form = TweetForm(request.POST, request.FILES)
        if form.is_valid():
            tweet = form.save(commit=False)
            tweet.user = request.user
            tweet.save()
            return redirect('tweet:tweet_list')
    else:
        form = TweetForm()
    return render(request, 'tweet_form.html', {'form': form})


@login_required
def edit_tweet(request, tweetId):
    tweet = get_object_or_404(Tweet, pk=tweetId, user=request.user)
    if request.method == 'POST':
        form = TweetForm(request.POST, request.FILES, instance=tweet)
        if form.is_valid():
            tweet = form.save(commit=False)
            tweet.user = request.user
            tweet.save()
            return redirect('tweet:tweet_list')
    else:
        form = TweetForm(instance=tweet)
    return render(request, 'tweet_form.html', {'form': form})


@login_required
def delete_tweet(request, tweetId):
    tweet = get_object_or_404(Tweet, pk=tweetId, user=request.user)
    if request.method == 'POST':
        tweet.delete()
        return redirect('tweet:tweet_list')
    return render(request, 'tweet_cofirm_delete.html', {'tweet': tweet})


def registerUser(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()            # get the saved user
            login(request, user)          # pass request and user
            return redirect('tweet:tweet_list')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})


def loginUser(request):
    if request.method == 'POST':
        form = AuthenticationForm(request.POST)
        if form.is_valid():
            login(request, user)
            return redirect('tweet:tweet_list')
    else:
        form = AuthenticationForm()
    return render(request, 'registration/login.html', {'form': form})
