from django.contrib import admin
from django.urls import path,include
from . import views


urlpatterns = [
    path('create-user/',views.CreateUser, name="createUser"),
    path('user-login/',views.Userlogin, name="userLogin")
]