from django.contrib import admin

from ecommerce.models import Category, Color, Product, ProductImage, Shipment, Size, SubCategory

# Register your models here.
admin.site.site_header = 'Ecommerce ADMIN'

class ProductImageInline(admin.TabularInline):
    model = ProductImage

@admin.register(Product)

class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ProductImageInline
    ]
    list_display = ('id', 'name', 'price', 'date_created',)
    list_filter = ('date_created',)


admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(Shipment)
