from django.contrib.auth.models import User
from django.db.models import fields
from rest_framework import serializers
from .models import*


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin =  serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['_id','name','username','email','isAdmin']
    
    # for getting id field
    def get__id(self,obj):
        return obj.id

    # for getting name field 
    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name
    
    # for checking if isAdmin
    def get_isAdmin(Self,obj):
        return obj.is_staff


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

