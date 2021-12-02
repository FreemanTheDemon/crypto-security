const users = []
const bcrypt = require('bcryptjs');

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        let passExists = bcrypt.compareSync(password, users[i].password);
        if (users[i].username === username && passExists) {
          let returnedUser = {...users[i]};
          delete returnedUser.password;
          console.log('User found', returnedUser);
          res.status(200).send(returnedUser);
          return;
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body);
        
        const {username, email, firstName, lastName, password} = req.body;
        
        let salt = bcrypt.genSaltSync(5);
        
        let passHash = bcrypt.hashSync(password, salt);
        
        let userObj = {
          username,
          email,
          firstName,
          lastName,
          password: passHash
        };
        
        console.log(userObj);
        users.push(userObj)
        res.status(200).send(userObj)
    }
}