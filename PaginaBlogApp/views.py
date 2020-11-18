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

            send_mail(info_form['asunto'], info_form['mensaje'],
            info_form.get('mail', 'lucasvaan80@gmail.com'), [info_form['mail']],)

            return render(request, "PaginaBlogApp/contact.html", {'en': 'x'})
        f = Formulario_Contacto()
    
    return render(request, "PaginaBlogApp/contact.html", {'en': "y"})
