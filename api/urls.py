from django.urls import path
from . import views
urlpatterns = [
    path('chart_data/',views.chart_data,name="chart_data"),
    path('dashboard_data/',views.dashboard_data,name="dashboard_data"),    
    path('dashboard_data/upload',views.upload_dashboard_data,name="upload_dashboard_data"),    

]
