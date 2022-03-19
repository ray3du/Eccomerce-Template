from ecommerce.models import Category, Color, Product, ProductImage, Shipment, Size, SubCategory
from rest_framework.serializers import ModelSerializer

class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ProductImageSerializer(ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'

class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class SubCategorySerializer(ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'

class ColorSerializer(ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'

class SizeSerializer(ModelSerializer):
    class Meta:
        model = Size
        fields = '__all__'

class ShipmentSerializer(ModelSerializer):
    class Meta:
        model = Shipment
        fields = '__all__'