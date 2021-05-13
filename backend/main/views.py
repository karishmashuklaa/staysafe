from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .products import products
from .models import*
from .serializers import*

@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/api/products/',
        '/api/products/create/',
        '/api/products/upload/',
    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
 

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)