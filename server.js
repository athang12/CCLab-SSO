const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect(
  'mongodb+srv://prathameshgawande:sampada123@cluster0.8r8jzls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
})

const User = new mongoose.model('User', userSchema)

//Routes
app.post('/login', async (req, res) => {
  const { email, password } = req.body
  //check email
  const user = await User.findOne({ email: email })
  console.log(user)
  if (user) {
    //check password
    if (password === user.password) {
      res.send({ message: 'Login successfully', user: user })
    } else {
      res.send({ message: "Password and confirm password didn't match" })
    }
  } else {
    res.send({ message: 'Please login to proceed' })
  }
})

const register = async (req, res) => {
  const { fname, lname, email, password } = req.body
  //check email
  const user = await User.findOne({ email: email })
  console.log(user)
  if (user) {
    res.send({ message: 'User is already registerd' })
  } else {
    const user = await User.create({ ...req.body })
    res.send({ message: 'new user created' })
  }
}

app.post('/signup', register)

app.listen(8000, () => {
  console.log('Server starting at 8000')
})
