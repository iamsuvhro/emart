import json
from pyrsistent import field
from rest_framework import serializers
from user.models import UserData
from django.core import serializers

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = ["name","username","password","email"]

data = serializers.serialize("json", UserData.objects.all(), field('name','username'))