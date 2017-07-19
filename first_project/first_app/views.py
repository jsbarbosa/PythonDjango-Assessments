from django.shortcuts import render
from django.http import HttpResponse
from first_app.models import User

def index(request):
    return render(request, 'index.html')

def users(request):
    context = {'users': User.objects.order_by('first_name')}
    return render(request, 'first_app/users.html', context=context)
# Create your views here.
