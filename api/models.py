from django.db import models

# Create your models here.

class DashboardData(models.Model):
    end_year = models.CharField(max_length=100)
    topics = models.CharField(max_length=100)
    sector = models.CharField(max_length=100)
    pest = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    sowt = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    region = models.IntegerField()
    values = models.IntegerField()

class ChartData(models.Model):
    intensity = models.IntegerField()
    topic = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    relevance = models.IntegerField()
    likelihood = models.IntegerField()
    year = models.IntegerField()
    city =models.CharField(max_length=100)
