from django import forms

class Formulario_Contacto(forms.Form):
    mail = forms.EmailField(label='E-Mail')
    asunto = forms.CharField(label='Asunto')
    mensaje = forms.CharField(label='Mensaje')


