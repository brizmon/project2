const fontController = {};

fontController.index = (req, res) => {
  res.render('fonts/fonts-index', {
    font: res.locals.font,
  });
}

module.exports = fontController;