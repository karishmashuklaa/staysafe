from django.urls import path
from . import views

urlpatterns = [
    # Routing urls 
    path('',views.getRoutes,name="routes"),

    # User urls
    path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profile/', views.getUserProfile, name='users-profile'),
    path('users/', views.getUsers, name='users'),

    # Products urls 
    path('products/',views.getProducts,name='products'),
    path('products/<str:pk>/',views.getProduct,name='product'),
]