from django.shortcuts import render
from django.core.mail import send_mail
from form import Formulario_Contacto
from PaginaBlog import settings 

# Create your views here.

def home(request):
    return render(request, 'PaginaBlogApp/home.html')

def about_us(request):
    return render(request, 'PaginaBlogApp/aboutus.html')
"""
def contact(request):
    if request.method == "POST":
        data = {
            'nombre': request.POST.get('name'),
            'apellidos': request.POST.get('apellido'),
            'mail': request.POST.get('mail')
        }
        f = Formulario_Contacto(data)

        if f.is_valid(): 
            # info_form = f.cleaned_data

            mensaje = 'El cliente ' + data['nombre'] + 'desea recibir mas información, su correo es: ' + request.POST.get('mail')

            send_mail('Cliente Nuevo', mensaje,
            'lucasvaan80@gmail.com', ['jmejias986@gmail.com'])

            #send_mail('Mensaje del autor', 'Gracias por confiar en nosotros, en breve le enviaremos más informacón.',
            #'lucasvaan80@gmail.com', [data['mail']])

            return render(request, "PaginaBlogApp/contact.html")
        f = Formulario_Contacto()
    
    return render(request, "PaginaBlogApp/contact.html")
"""

def contact(request):
    if request.method == "POST":
        data = {
            'nombre': request.POST.get('name'),
            'apellidos': request.POST.get('apellido'),
            'mail': request.POST.get('mail')
        }
        mensaje = 'El cliente ' + data['nombre'] + ' desea recibir mas información, su correo es: ' + request.POST.get('mail')
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ['lucasvaan80@gmail.com']

        send_mail('subject', mensaje, email_from, recipient_list)
    
    return render(request, "PaginaBlogApp/contact.html")


