const Course = require("../models/Course");
const {mutipleMongooseToObject} = require('../../util/mongoose')

class MeController {

    storedCourses(req, res,next) {
        Course.find({})
            .then(course => res.render('me/store-courses',{
                course: mutipleMongooseToObject(course)
            }))
            .catch(next);
    
  }

  
}

module.exports = new MeController();
