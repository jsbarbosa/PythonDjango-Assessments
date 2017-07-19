from django.conf.urls import url
from forms_app.views import form_name_view

urlpatterns = [
    url(r'^$', form_name_view)
]
