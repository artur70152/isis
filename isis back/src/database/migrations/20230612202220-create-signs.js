module.exports = {
  up: (queryInterface, Sequelize)=> {
    
      return queryInterface.createTable('signs', { 
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
      
      created_at:{
        type:Sequelize.DATE,
        allowNull:false,
        },
  
        updated_at:{
        type:Sequelize.DATE,
        allowNull:false,
        },
      });
     
  },

 down: queryInterface=> {
    
    return queryInterface.dropTable('signs');
    
  }
};

