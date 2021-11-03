from django.urls import re_path, include
from rest_framework import routers

from .views import ListArticle


router = routers.SimpleRouter()
router.register(r'articles', ListArticle)

urlpatterns = [
    re_path('', include(router.urls))
]