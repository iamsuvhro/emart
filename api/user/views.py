from django.shortcuts import render
from requests import request
from rest_framework.views import APIView
from rest_framework.response import Response
from sqlalchemy import false, true
from user.services.user import UserServices
from rest_framework.decorators import api_view
from django.http import HttpRequest

@api_view(["POST"])
def Userlogin(request: HttpRequest) ->  Response:
    """
    Method to authenticate user Id & password
    """
    payload = request.data
    res = UserServices.userAthentication(payload)
    return Response(res)

@api_view(["POST"])
def CreateUser(request: HttpRequest) ->  Response:
    """
    API for create user
    """
    payload = request.data
    res = UserServices.createUser(payload)
    return Response(res)



    