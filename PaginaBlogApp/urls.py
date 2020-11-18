from django.contrib import admin
from django.urls import path
from PaginaBlogApp import views

urlpatterns = [
    path('', views.home, name="Inicio"),
    path('nosotros/', views.about_us, name="Nosotros"),
    path('contacto/', views.contact, name="Contacto"),
]
