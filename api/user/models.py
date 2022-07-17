from django.db import models

# Create your models here.
class UserData(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.name