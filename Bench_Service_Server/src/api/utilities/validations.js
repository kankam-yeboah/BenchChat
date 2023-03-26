export const validate = (Schema) => {
  return async (req, res, next) => {
    if (req.method == "POST") {
      let object = req.body;
      if (object.phonenumber) object.phonenumber = parseInt(object.phonenumber);
      try {
        await Schema.validate(object);
        next();
      } catch (err) {
        if (err) {
          res.send(err.message);
        }
      }
    } else {
      next();
    }
  };
};
