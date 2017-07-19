from django.shortcuts import render
from .forms import FormName

# Create your views here.

def form_name_view(request):
    if request.method == 'POST':
        form = FormName(request.POST)
        keys = ["name", "email", "text"]
        if form.is_valid():
            text = "Validation\n"
            for key in keys:
                text += "\t%s: %s\n"%(key.upper(), form.cleaned_data[key])
            print(text)
    else:
        form = FormName()
    return render(request, 'forms_app/form.html', {'form':form})
