import mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

export const User = mongoose.model('User', UserSchema)
