from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from ecommerce.views import CategoryAPIView, MainAPIView, ProductAPIView, ProductImageAPIView, SubCategoryAPIView

urlpatterns = [
    path('', MainAPIView.as_view()),
    path('product/', ProductAPIView.as_view()),
    path('image/', ProductImageAPIView.as_view()),
    path('category/', CategoryAPIView.as_view()),
    path('subCategory/', SubCategoryAPIView.as_view()),
]  + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)