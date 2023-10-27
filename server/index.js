const express=require('express');
const {ApolloServer}=require('apollo-server-express')
const {resolvers}=require('./resolvers/index')
const {typeDefs}=require('./modals/typeDefs')
const app=express();  //app creation
const server=new ApolloServer({resolvers,typeDefs}); // apollo server creation
const db=require("./modals/sequelize.modal");

//app.get("/",(req,res)=>{
//    res.send("Welcome to express api")
//})
server.start().then ((res)=>{
    db.sequelize.sync({force:false}).then(()=>{
        console.log("DB sync successfully")
    })
    server.applyMiddleware({app});
    app.listen({port:4000},()=>{
        console.log('Graphql server is running at port 4000 graphql');
    })
})

//app.listen(4000,()=>{
//    console.log("server is running at port 4000")
//})