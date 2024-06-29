const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);

router.post('/saveCourse', coursesController.saveCourse);

router.get('/:slug', coursesController.show);

module.exports = router;