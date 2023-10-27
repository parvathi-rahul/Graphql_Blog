module.exports=(sequelize,DataTypes,db)=>{
    const Comment=sequelize.define("Comment",{
        comment_id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true
        },
        text:{
            type:DataTypes.STRING,
            allowNull:false,
        },
       
        author:{
            type:DataTypes.STRING,
            allowNull:false,
        },
   

    });

Comment.associate=(models)=>{
    Comment.belongsTo(models.Post,{as:"post",foreignKey:"post_id"})
};
return Comment;
};

// CREATE TABLE blogdb.Comment (
//     comment_id VARCHAR(100) PRIMARY KEY,
//     text VARCHAR(200),
//     author VARCHAR(100),
//     post_id VARCHAR(100),
//     FOREIGN KEY (post_id) REFERENCES Post (post_id)
// );

// INSERT INTO blogdb.Comment (comment_id, text,author,post_id)
// VALUES (100, 'Hai', 'author100',1)