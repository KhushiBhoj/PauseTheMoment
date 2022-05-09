const express = require('express')
const router = express.Router();

// the indexController
const indexController = require('../controllers/index')

// indexing methods
router.get('/', indexController.index);

router.get('/blog', indexController.blog);
router.get('/contact', indexController.contact);
router.post('/contact', indexController.submitContact);
router.get('/travel', (req, res)=>{
  res.render('TravelNow.ejs');
});
router.get('/Places', indexController.places);
router.get('/gallery', indexController.gallery);
router.get('/reasons', indexController.reasons);
router.get('/city', indexController.city);
router.get('/hillstation', indexController.hillstation);
router.get('/monuments', indexController.monuments);
router.get('/pilgrimage', indexController.pilgrimage);
router.get('/seaside', indexController.seaside);

// login and register methods
router.get('/login', indexController.login);

// administration pages
// Edit page
router.get('/edit/:id', indexController.edit);
router.post('/update/:id', indexController.update);

// Delete
router.get('/delete/:id' , indexController.delete);

//controller
app.get('/about', function(req, res) {
    res.render('pages/about');
  });
  
router.get('/new', indexController.new_get);

router.post('/new', indexController.new_post);

router.get('/post/:id', indexController.post);



module.exports = router