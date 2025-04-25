from django import forms
from todoManager.models import Todo


class TodoForm(forms.ModelForm):
    class Meta:
        model = Todo
        fields = ['title']
        widgets = {
            'title': forms.TextInput(attrs={
                'class': 'grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-500 text-white',
                'placeholder': 'Enter a task...',
                'autofocus': True,
            }),
        }
