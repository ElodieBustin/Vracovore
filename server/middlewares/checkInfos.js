function checkInfos(req, res, next) {
    const { last_name, first_name, email, password } = req.body;
  
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    function validatePassWord(userPassword){
      return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/.test(userPassword);
    }
  
    if (req.path === "/register") {
      if (![last_name, first_name, email, password].every(Boolean)) {
        return res.status(401).json("Un ou plusieurs champs sont vides");
      } else if (!validEmail(email)) {
        return res.status(401).json("Votre email est invalide");
      } else if (!validatePassWord(password)){
        return res.status(401).json("Votre mot de passe doit avoir au minimum 6 caractères, comprenant une lettre majuscule, une minuscule, un numéro et un caractère spécial (#?!@$%^&*-)");
      }
    } else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials for login");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    }
  
    next();
  };

  module.exports = checkInfos;