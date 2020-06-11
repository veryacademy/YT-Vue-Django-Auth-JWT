from rest_framework.response import Response
from rest_framework import generics
from . models import Posts
from . serializers import PostSerializer
from rest_framework.permissions import IsAuthenticated

# RetrieveAPIView - used for read-only endpoints to represent a single model instance.
# https://www.django-rest-framework.org/api-guide/generic-views/#retrieveapiview
class PostsView(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticated,)  
    queryset = Posts.objects.all()

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)
