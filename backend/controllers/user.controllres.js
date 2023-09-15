const User = require('../Models/user.model');
const { hasherMiddleWare, isPassCorrectMiddleware } = require('../middlewares/users/hasherpass');
const { usernameExists, emailExists } = require('../middlewares/users/ifExistMiddlewares');
const {jwtSign} = require('../middlewares/users/tokenReturn')

/*
*   > Creates a new user using the data from the request body.
*   > RETURNS: N/A
*   
*   @param req: request object
*   @param res: response object
*/
const createNewUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (await usernameExists(username)) {
    res.status(300).send('Username already exists');
    return;
  }

  if (await emailExists(email)) {
    res.status(300).send('Email already exists');
    return;
  }

  const hashedPassword = await hasherMiddleWare(password);

  const newuser = new User({
    username: username,
    email: email,
    hashedPassword: hashedPassword,
    role: role
  });

  await newuser.save();
  res.json(newuser).status(200);
};

/*
*   > Logs in a user by authentication.
*   > RETURNS: Cookie with token.
*   
*   @param req: request object
*   @param res: response object
*/
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      res.status(404).send("User doesn't exist");
      return;
    }

    const hashpass = user.hashedPassword;

    const isCorrectPassword = await isPassCorrectMiddleware(password, hashpass);

    if (!isCorrectPassword) {
      res.status(401).send("Incorrect password");
      return;
    }

    const toSignUser = {
      username:user.username,
      role : user.role
    }
    
    const token = await jwtSign(toSignUser)
  
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 2000 * 1000, //convert 2h to ms; maxAge uses miliseconds
    });

    res.status(200).send("Cookie sent + logged in")
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};



const showUser = async (req,res)=>{
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = { createNewUser, loginUser, showUser};