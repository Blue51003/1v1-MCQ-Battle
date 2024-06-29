import uuid
from django.db import models

# Create your models here.
class MCQ (models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    body = models.TextField()
    explanation = models.TextField()
    options = models.JSONField()
