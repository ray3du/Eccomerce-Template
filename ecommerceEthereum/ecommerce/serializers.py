from ecommerce.models import Category, Product, ProductImage, SubCategory
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

