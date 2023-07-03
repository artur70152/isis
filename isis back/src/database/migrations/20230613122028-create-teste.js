module.exports = {
  up: (queryInterface, Sequelize)=> {
    
      return queryInterface.createTable('teste', { 
        id: {
          type:Sequelize.INTEGER,
          allowNull:false,
          autoIncrement:true,
          primaryKey:true,
            },

  
      datai:{
      type:Sequelize.DATE,
      allowNull:true,
      },
      dataf:{
        type:Sequelize.DATE,
        allowNull:true,
        },
      signo:{
      type:Sequelize.STRING,
      allowNull:true,
      },
      
      });
     
  },

 down: queryInterface=> {
    
    return queryInterface.dropTable('teste');
    
  }
};

