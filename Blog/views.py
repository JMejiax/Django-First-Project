from django.shortcuts import render, HttpResponse
from .models import Post
import praw



# Create your views here.

def publicaciones(request):

    blogs = Post.objects.all()

    return render(request, 'Blog/blogs.html', {'blogs': blogs})

def publicacion(request):
    return render(request, 'Blog/post.html')

def reddit(request):
    if request.method == 'POST':
        art = []
        search = request.POST.get("search", "")
        to_search = search.replace(' ', '')
        reddit = praw.Reddit(client_id="q1i340R54PKFwg", client_secret="moaYGZScmCG_t131e5zGOVoW8FkHDg", user_agent="jm_cys")
        try:
            for submission in reddit.subreddit(to_search).hot(limit=10):
                art.append((submission.title, submission.author, submission.score, submission.url))
        except Exception:
            pass
        data = {"articulos": art, "busqueda": search}
        return render(request, 'Blog/reddit.html', data)
    else:
        return render(request, 'Blog/reddit.html')
