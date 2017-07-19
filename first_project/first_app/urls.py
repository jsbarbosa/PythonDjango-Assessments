from django.conf.urls import url
from first_app.views import users

urlpatterns = [
    url(r'^$', users, name='users')
]
