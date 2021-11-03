
from rest_framework import viewsets
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.response import Response

class ListArticle(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    # 記事一覧取得
    def list(self, request):
        data = ArticleSerializer(Article.objects.all().order_by('created_at').reverse(), many=True).data

        return Response(status=200, data=data) 

    # 記事詳細取得
    def retrieve(self, request, pk=None):
        article_id = pk
        data = ArticleSerializer(Article.objects.filter(uuid=article_id), many=True).data

        return Response(status=200, data=data)