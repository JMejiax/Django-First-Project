from django import forms

class Formulario_Contacto(forms.Form):
    nombre = forms.CharField(label='Nombre')
    apellidos = forms.CharField(label='Apellidos')
    mail = forms.EmailField(label='E-Mail')


