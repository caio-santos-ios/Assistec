from django.db import models


class Order(models.Model):
    name = models.CharField(max_length=255)
    cpf = models.CharField(max_length=14)
    date = models.CharField(max_length=10)
    description = models.TextField()
    value = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=100)
    is_open = models.BooleanField(default=True)
