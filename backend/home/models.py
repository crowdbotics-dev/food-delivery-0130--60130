from django.conf import settings
from django.db import models
class Restaurant(models.Model):
    'Generated Model'
    name = models.CharField(max_length=200,)
    address = models.CharField(max_length=200,)
    phone = models.CharField(max_length=200,)
    website = models.URLField()
