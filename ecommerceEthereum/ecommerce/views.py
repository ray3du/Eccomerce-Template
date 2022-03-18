from ecommerce.models import Category, Product, ProductImage, SubCategory
from ecommerce.serializers import CategorySerializer, ProductImageSerializer, ProductSerializer, SubCategorySerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK

# Create your views here.
class MainAPIView(APIView):
    def get(self, request):
        msg = {'msg': 'If you are seeing this maybe we should hire you'}
        return Response(data=msg, status=HTTP_200_OK)

class ProductAPIView(APIView):
    def get(self, request):
        qs = Product.objects.all()
        serializer = ProductSerializer(qs, many=True)
        return Response(data=serializer.data, status=HTTP_200_OK)

class ProductImageAPIView(APIView):
    def get(self, request):
        qs = ProductImage.objects.all()
        serializer = ProductImageSerializer(qs, many=True)
        return Response(data=serializer.data, status=HTTP_200_OK)

class CategoryAPIView(APIView):
    def get(self, request):
        qs = Category.objects.all()
        serializer = CategorySerializer(qs, many=True)
        return Response(data=serializer.data, status=HTTP_200_OK)

class SubCategoryAPIView(APIView):
    def get(self, request):
        qs = SubCategory.objects.all()
        serializer = SubCategorySerializer(qs, many=True)
        return Response(data=serializer.data, status=HTTP_200_OK)
