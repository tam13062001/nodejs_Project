const Course = require("../models/Course");
const {mutipleMongooseToObject, mongoosetoObject} = require('../../util/mongoose')

class CoursesController {
 
    show(req, res,next) {
        Course.findOne({slug : req.params.slug})
        .then(course => {
            res.render('courses/show', { course : mongoosetoObject(course)});
        })
        .catch(next);
  }
// get
    create(req,res,next){
        res.render('courses/create');
  }

// post
    saveCourse(req,res,next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.IdFirstVideo}/sddefault.jpg`;
        const course = new Course(formData);
        course.save().then(() => res.redirect('/'))
        .catch(error =>{
            
        });;
    }
}

module.exports = new CoursesController();
