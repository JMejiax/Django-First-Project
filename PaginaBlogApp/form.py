from django import forms

class Formulario_Contacto(forms.Form):
    nombre = forms.CharField(label='Nombre')
    apellidos = forms.CharField(label='Apellidos')
    fecha_nac = forms.DateField(label='Fecha')
    mail = forms.EmailField(label='E-Mail')
    grado = forms.CharField(label='Grado')
    genero = forms.CharField(label='Genero')


