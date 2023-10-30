from django.db import models

# Create your models here.
class Post(models.Model):
    title=models.CharField(max_length=100)
    description=models.CharField(max_length=500)
    publish_date=models.DateField()
    author=models.CharField(max_length=100)

    def __str__(self):
        return self.title
    
class Comment(models.Model):
    post=models.ForeignKey(Post,on_delete=models.CASCADE,null=True)
    text=models.CharField(max_length=100,null=True)
    author=models.CharField(max_length=100,null=True)

    def __str__(self):
        return self.text