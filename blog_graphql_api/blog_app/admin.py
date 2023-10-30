from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Post)  #register the 'Post' model 
admin.site.register(models.Comment) #register the 'Comment' model