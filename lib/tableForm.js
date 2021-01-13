

  getEdit(req, res, next) {
    if (req.session.loggedIn) {
      
    } else {
      res.redirect("/");
    }
  }

  postEdit(req, res, next) {
    if (req.session.loggedIn) {
      
    } else {
      res.redirect("/table");
    }
  }

  getDelete(req, res, next) {
    if (req.session.loggedIn) {
      
    } else {
      res.redirect("/");
    }
  }
}

module.exports.TableForm = TableForm;
