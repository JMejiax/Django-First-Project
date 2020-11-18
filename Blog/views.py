from django.shortcuts import render, HttpResponse
from .models import Post



# Create your views here.

def publicaciones(request):

    blogs = Post.objects.all()

    return render(request, 'Blog/blogs.html', {'blogs': blogs})

def publicacion(request):
    return render(request, 'Blog/post.html')
