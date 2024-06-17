import json
import requests
from django.http import JsonResponse
from django.shortcuts import render
from .models import DashboardData,ChartData
from .serializers import DashboardDataSerializer
from collections import defaultdict
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

def chart_data(request):
    try:
               chartDataObjects = ChartData.objects.filter()
               data_dict ={
                  "intensity_values":[],
                  "sector_values":[],
                  "topic_values":[],
                  }
            # Open and read the JSON file
               with open('api/template/jsondata.json', 'r', encoding='utf-8') as file:
                  json_data = json.load(file)


   
                  for obj in json_data:
                    data_dict["intensity_values"].append(obj.get("intensity"))
                    data_dict["sector_values"].append(obj.get("sector"))
                    data_dict["topic_values"].append(obj.get("topic"))
                     
               
               dict_count = {}
               labels = []
               data = []
               sector_values = []
               intensity_values = []
               topic_values = []


               for key,values in data_dict.items():
                   unique_values = set(values)
                   values_count = defaultdict(int)
                   for value in values:
                        values_count[value] += 1
                   dict_count[key] = {
                   "num_of_dif_values": len(unique_values),
                   "values_count": dict(values_count),
        }
                   labels.append(key)
                   data.append(values_count)
                   json_data = json.dumps(dict_count)

                   for_chart_use = {
                       "labels":labels,
                       "values" :data,
                   }

            #    for key,values in data_dict.items():
            #        unique_values = set([values])
            #        data_dict[key] = {
            #            "num_of_dif_values":len(unique_values),
            #            "values_count":defaultdict(int)
            #        }
            #        for value in values:
            #             dict_count[key]["values_count"][value]+=1

               return JsonResponse(for_chart_use,status =200,safe=False)
    except FileNotFoundError:
         return JsonResponse({'error':'JSON file not found'},status=404)
    except json.JSONDecodeError:
     return JsonResponse({'error':'Invalid JSON format'},status=400)
    except requests.exceptions.RequestException as e:
     return JsonResponse({'error':'Error occurred while fetching data from the API'}, status=500)
        
@api_view(['GET'])
def dashboard_data(request):
    try:
      data_objects = DashboardData.objects.all()

    # Add filters
      end_year = request.GET.get('end_year')
      if end_year:
          data_objects = data_objects.filter(end_year=end_year)

      topics = request.GET.get('topics')
      if topics:
          data_objects = data_objects.filter(topics = topics)

      sector = request.GET.get('sector')
      if sector:
          data_objects = data_objects.filter(sector = sector)
       
      region = request.GET.get('region')
      if region:
          data_objects = data_objects.filter(region = region)

      pest = request.GET.get('PEST')
      if pest:
          data_objects = data_objects.filter(pest = pest)

      source = request.GET.get('source')
      if source:
          data_objects = data_objects.filter(source = source)

      sowt = request.GET.get('SWOT')
      if sowt:
          data_objects = data_objects.filter(sowt = sowt)

      country = request.GET.get('Country')
      if country:
          data_objects = data_objects.filter(country = country)

      city = request.GET.get('City')
      if city:
          data_objects = data_objects.filter(city = city)

      serializer = DashboardDataSerializer(data_objects, many=True)
      serialized_data = serializer.data

      return JsonResponse(serialized_data,status = 200)
    
    except Exception as e:
        return JsonResponse({'Error':str(e)},status=500,safe=False)  
    



@api_view(['POST'])
def upload_dashboard_data(request):
    try:
        serializer = DashboardDataSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        else:
            return Response(serializer.errors,status=400)
        
    except Exception as e:
        return Response({'Error':str(e)},status=500)
