const behanceController = {};

behanceController.index = (req, res) => {
  res.render('visuals/visuals-index', {
    project: res.locals.project,
  });
}

//this is where create should go with the req


module.exports = behanceController;