from . import models
from django import forms
from .models import Post


class PostForm(forms.Form):
    post = forms.ModelChoiceField(
        queryset=Post.objects.all(), label='Select type of post')


class CreatePost(forms.ModelForm):
    class Meta:
        model = models.Post
        fields = ['name', 'description', 'slug', 'image']
