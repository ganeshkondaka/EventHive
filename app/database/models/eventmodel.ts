import mongoose, { Schema } from "mongoose"

export interface EVENTTYPE {
    email: string,
    title: string,
    price: string,
    feild: string,
    organizer: string,
    time: string,
    place: string,
    description: string,
    organizer_link: string,
    payment_link: string,
}

const EventSchema = new Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true,
        unique: true
    },
    feild: {
        type: String,
    },
    organizer: {
        type: String,
    },
    time: {
        type: String,
    },
    place: {
        type: String,
    },
    description: {
        type: String,
    },
    organizer_link: {
        type: String,
    },
    payment_link: {
        type: String,
    }

})

// Check if the model already exists before defining it
const eventmodel = mongoose.models.user_model || mongoose.model('Event_model', EventSchema)
export default eventmodel