const mongoose = require('mongoose');

// Povezivanje sa MongoDB
mongoose.connect('mongodb://localhost:27017/user_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Uspešno povezivanje sa MongoDB.'))
.catch(err => console.error('Greška pri povezivanju sa MongoDB:', err));

// Definicija User modela
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
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Molimo unesite ispravan email']
  }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };