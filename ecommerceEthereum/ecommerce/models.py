import uuid
from django.db import models

# Create your models here.
def upload_image_path(instance, filename):
    return "user_{0}/{1}".format(uuid.uuid4(), filename)

def upload_cover_image_path(instance, filename):
    return "cover_{0}/{1}".format(uuid.uuid4(), filename)


class Category(models.Model):
    id = models.IntegerField(primary_key=True, default=0, auto_created=True)
    name = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name

class SubCategory(models.Model):
    name = models.CharField(max_length=100) 
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.name

class Color(models.Model):
    id = models.IntegerField(primary_key=True, default=0, auto_created=True)
    color = models.CharField(max_length=100, default='None') 

    def __str__(self) -> str:
        return self.color


class Size(models.Model):
    id = models.IntegerField(primary_key=True, default=0, auto_created=True)
    size = models.CharField(max_length=100, default='None')

    def __str__(self) -> str:
        return self.size


class Shipment(models.Model):
    id = models.IntegerField(primary_key=True, default=0, auto_created=True)
    shipment = models.CharField(max_length=100, default='Local') 

    def __str__(self) -> str:
        return self.shipment

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    date_created = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.DO_NOTHING)
    color = models.ForeignKey(Color, on_delete=models.DO_NOTHING)
    size = models.ForeignKey(Size, on_delete=models.DO_NOTHING)
    shipment = models.ForeignKey(Shipment, on_delete=models.DO_NOTHING)

    def __str__(self) -> str:
        return str(self.id)

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    path = models.ImageField(upload_to=upload_image_path)

    def __str__(self) -> str:
        return str(self.product)

class CoverImage(models.Model):
    id = models.IntegerField(primary_key=True, auto_created=True)
    path = models.ImageField(upload_to=upload_cover_image_path)

    def __str__(self) -> str:
        return self.path
    