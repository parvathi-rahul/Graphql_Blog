from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from django.urls import path
from blog_app.schema import schema
"""
With the help of import statements, we added a "graphql" route to our list of urlpatterns that will 
automatically open the GraphiQL API browser for testing our queries and mutations.This is done with 
the graphiql parameter of the GraphQLView.as_view() method.

"""

urlpatterns = [
    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True,schema=schema))),
]