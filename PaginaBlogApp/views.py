from django.shortcuts import render
from django.core.mail import send_mail
from .form import Formulario_Contacto
from PaginaBlog import settings 

# Create your views here.

def home(request):
    return render(request, 'PaginaBlogApp/home.html')

def about_us(request):
    return render(request, 'PaginaBlogApp/aboutus.html')

def contact(request):
    return render(request, "PaginaBlogApp/contact.html")


