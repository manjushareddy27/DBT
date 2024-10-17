from django.urls import include, path
from rest_framework import routers

from minihub.api_views import CompanyViewSet


router = routers.DefaultRouter()
router.register('companies', CompanyViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
