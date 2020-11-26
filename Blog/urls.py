from django.contrib import admin
from django.urls import path
from Blog import views

urlpatterns = [
    path('posts/', views.publicaciones, name="Publicaciones"),
    path('post/', views.publicacion, name="Publicacion"),
    path('post2/', views.publicacion2, name="Publicacion2"),
    path('reddit/', views.reddit, name="Reddit"),
]