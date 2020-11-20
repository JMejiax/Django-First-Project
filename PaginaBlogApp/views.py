from django.shortcuts import render
from django.core.mail import send_mail
from .form import Formulario_Contacto

# Create your views here.

def home(request):
    return render(request, 'PaginaBlogApp/home.html')

def about_us(request):
    return render(request, 'PaginaBlogApp/aboutus.html')

def contact(request):
    if request.method == "POST":
        f = Formulario_Contacto(request.POST)

        if f.is_valid(): 
            info_form = f.cleaned_data

            send_mail('Cliente Nuevo', 'El cliente quiere recibir informacion',
            info_form.get('mail', 'lucasvaan80@gmail.com'), [info_form['mail']],)

            return render(request, "PaginaBlogApp/contact.html")
        f = Formulario_Contacto()
    
    return render(request, "PaginaBlogApp/contact.html")
