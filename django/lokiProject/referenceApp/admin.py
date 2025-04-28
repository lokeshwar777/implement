from django.contrib import admin
from .models import Post, PostReview

# Register your models here.


class PostReviewInline(admin.TabularInline):
    model = PostReview
    extra = 2


class PostAdmin(admin.ModelAdmin):
    list_display = ('name', 'type', 'date_added')
    inlines = [PostReviewInline]


admin.site.register(Post, PostAdmin)
