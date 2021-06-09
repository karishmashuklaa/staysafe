from django.contrib.auth.models import User
from django.db.models import fields
from rest_framework import serializers
from .models import*


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'email']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

