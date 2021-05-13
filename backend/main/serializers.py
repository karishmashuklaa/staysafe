from rest_framework import serializers
from django.conf import settings
from .models import*

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'