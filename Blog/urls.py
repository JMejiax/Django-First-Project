from django.contrib import admin
from django.urls import path
from Blog import views

urlpatterns = [
    path('posts/', views.publicaciones, name="Publicaciones"),
]