const Font = require('../models/googleFonts');
const fontController = {};


fontController.index = (req, res) => {
    Font.findAll()
        .then(fonts => {
            res.render('fonts/fonts-index', {
                font: res.locals.font,
                currentPage: 'index',
                message: 'ok',
                data: fonts,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
};

fontController.show = (req, res) => {
    Font.findById(req.params.id)
        .then(font => {
            res.render('fonts/font-single', {
                currentPage: 'show',
                message: 'ok',
                data: font,
            });
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

fontController.create = (req, res) => {
    console.log ("save    save"); 
    Font.create({
        title: req.body.title,
        category: req.body.category,
        variants: req.body.variants,
        regular: req.body.regular,
    }).then(() => {
        res.redirect('/font');
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

fontController.update = (req,res)=>{
  console.log(req.body)
  Font.update({
    title: req.body.title,
    category: req.body.category,
    variants: req.body.variants,
    regular: req.body.regular,
  }).then( font =>{
    res.render('fonts/fonts-single',{
      data: font
    })
  })
}

fontController.delete = (req, res) => {
    Font.destroy(req.params.id)
        .then(() => {
            res.redirect('/fonts');
        }).catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
};

module.exports = fontController;