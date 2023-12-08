from django_filters import rest_framework as filters
from rest_framework import generics
from .models import Order
from .serializer import SerializerOrder
from .filters import OrderFilter


class OrderView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = SerializerOrder
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = OrderFilter


class OrderDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = SerializerOrder
