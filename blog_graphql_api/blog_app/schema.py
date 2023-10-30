import graphene
from graphene_django import DjangoObjectType
from graphene_django.types import DjangoObjectType
from blog_app.models import Post,Comment

# API for implementing a post query to list all the posts

class PostType(DjangoObjectType):
  class Meta:
      model = Post
      fields = ("id", "title", "description","publish_date","author")


class CommentType(DjangoObjectType):
  class Meta:
      model = Comment
      fields = ("id", "post", "text","author")

      

class Query(graphene.ObjectType):
    posts=graphene.List(PostType)
    comments=graphene.List(CommentType)
    def resolve_posts(self,info,**kwargs): # resolver function 'resolve_posts' returns all the datas from the table 'Post'
        post_obj=Post.objects.all()
        return post_obj
    def resolve_comments(self,info,**kwargs): 
        comment_obj=Comment.objects.all()
        return comment_obj
    
    # implementation of 'post' query to get details of a post and all its comments

    post=graphene.Field(PostType, id=graphene.Int(required=True))
    def resolve_post(self, info, id):
        return Post.objects.get(pk=id)
    comments=graphene.List(CommentType, post_id=graphene.Int(required=True))
    def resolve_comments(self, info, post_id):
        return Comment.objects.filter(post_id=post_id)
    
    
# API for creating a post mutation which will create a post blog object with attributes 
# title,description,publish date and author

class CreatePost(graphene.Mutation):
    class Arguments:
        title=graphene.String()
        description=graphene.String()
        publish_date=graphene.Date()
        author=graphene.String()

    ok=graphene.Boolean()
    create_post=graphene.Field(PostType)
    def mutate(self,info,title,description,publish_date,author):
        create_post=Post(title=title,description=description,publish_date=publish_date,author=author)
        create_post.save()
        return CreatePost(ok=True,create_post=create_post)
    

# API for implementing a update Post mutation for updating a post attribute by its id

class UpdatedPost(graphene.Mutation):
    class Arguments:
        id=graphene.Int()
        title=graphene.String()
        description=graphene.String()
        publish_date=graphene.Date()
        author=graphene.String()
    ok=graphene.Boolean()
    updated_post=graphene.Field(PostType)
    def mutate(self,info,id,title,description,publish_date,author):
        post_obj=Post.objects.get(id=id)
        post_obj.title=title
        post_obj.description=description
        post_obj.publish_date=publish_date
        post_obj.author=author
        post_obj.save()
        return UpdatedPost(ok=True,updated_post=post_obj)

# API for creating a comment object with attributes text,author,and post(the post blog object)

class CreateComment(graphene.Mutation):
    class Arguments:
        post_id=graphene.Int()
        text=graphene.String()
        author=graphene.String()

    ok=graphene.Boolean()
    created_comment_data=graphene.Field(CommentType)
    def mutate(self,info,post_id,text,author):
        post_obj=Post.objects.get(id=post_id)
        post_id=post_obj.id
        comment_obj=Comment(post_id=post_id,text=text,author=author)
        comment_obj.save()
        return CreateComment(ok=True,created_comment_data=comment_obj)

# API for implementing a delete mutation to delete a given comment by its ID

class DeleteComment(graphene.Mutation):
    class Arguments:
        comment_id=graphene.Int()
    
    ok=graphene.Boolean()
    def mutate(self,info,comment_id):
        comment_obj=Comment.objects.get(id=comment_id)
        comment_obj.delete()
        return DeleteComment(ok=True)
     

class Mutation(graphene.ObjectType):
    create_post=CreatePost.Field() #mutation for creating a post object
    update_post=UpdatedPost.Field() #mutation for updating a post object
    create_comment=CreateComment.Field() #mutation for creating a comment object
    delete_comment=DeleteComment.Field() #mutation for deleting a comment object
  
schema=graphene.Schema(query=Query,mutation=Mutation) # pass the Query type into the graphene.Schema() function

    


