import uuid
from django.db import models

class Article(models.Model):
    uuid  = models.UUIDField('uuid', primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(verbose_name="タイトル", max_length=100)
    body  = models.TextField('本文')
    image = models.ImageField(upload_to='post_images', null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)