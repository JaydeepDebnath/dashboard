from django.db import models

# Create your models here.

class Chart(models.Model):
    Intensity = models.CharField(max_length=20,blank=False)
    Likelihood = models.CharField(max_length=50)
    Relevance = models.CharField(max_length=50)
    Year = models.CharField(max_length=10)
    Country = models.CharField(max_length=20)
    Topics = models.CharField(max_length=10)
    Region = models.CharField(max_length=5)
    City = models.CharField(max_length=10)
