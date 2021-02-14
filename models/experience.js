module.exports = function(sequelize, DataTypes) {

    const Experience = sequelize.define("Experience", {

        title: DataTypes.STRING,
        timeline1: DataTypes.INTEGER,
        timeline2: DataTypes.INTEGER


    })
    return Experience;
}

