import {Schema, model } from 'mongoose'

const COLLECTION_NAME = 'Users'

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxLength: 150
    },
    email: {
        type: String,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    verify: {
        type: Boolean,
        default: false
    },
    level: {
        type: String,
        require: true
    }

},  {
    timestamps: true,
    collection: COLLECTION_NAME
})

export default model('User', userSchema)