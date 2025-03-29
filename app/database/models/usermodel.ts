import mongoose, { Schema } from "mongoose"

export interface USERTYPE {
    email: string,
    password: string,
    username: string,
    firstname: string,
    lastname: string,
    image: string
}

const UserSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    image: {
        type: String,
    }

})

const usermodel = mongoose.model('user_model', UserSchema)
module.exports = { usermodel }