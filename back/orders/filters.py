from django_filters import rest_framework as filters


class OrderFilter(filters.FilterSet):
    cpf = filters.CharFilter(field_name="cpf", lookup_expr="icontains")
