const mongoose = require('mongoose');

// Connection to MongoDB
mongoose.connect('mongodb://localhost:27017/user_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connection was successful.'))
.catch(err => console.error('There was an error trying to connect to MongoDB:', err));

// User model definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email.']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };