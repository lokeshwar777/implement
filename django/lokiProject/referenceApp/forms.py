from django import forms
from .models import Post


class PostForm(forms.Form):
    post = forms.ModelChoiceField(
        queryset=Post.objects.all(), label='Select type of post')
