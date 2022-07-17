from django.shortcuts import render
from sqlalchemy import false
from user.models import UserData


class UserServices:

    def userAthentication(payload):
        """
        Method to authenticate users
        """
        res = {
            "success": false
        }
        try:
            username = payload['username']
            password = payload['password']
            UserData.objects.get(username=username, password=password)
            res.update(
                {
                    "success": True
                }
            )
            return res
        except Exception as ex:
            result = {
                'message':'Wrong username or password',
                'success': False
            }
            return result

    def createUser(payload):
        """
        Method to create to user in the database
        """
        res = {
            "success": False
        }
        try:
            name = payload['name']
            username = payload['username']
            password = payload['password']
            email = payload['email']
            breakpoint
            userRegistration = UserData(
                name=name,
                username=username,
                password=password,
                email=email
            )
            userRegistration.save()
            res.update({
                "success": True
            })
            return res
        except Exception as ex:
            return res
