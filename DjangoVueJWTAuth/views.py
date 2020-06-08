from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import generics
from . models import Posts
from . serializers import PostSerializer


# View for 'Mods' model
class PostsView(generics.RetrieveAPIView):
    # permission_classes = (IsAuthenticated,)  

    def get_queryset(self):
        Posts.objects.all()  

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)
