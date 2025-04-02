import mongoose, { Schema } from "mongoose";

export interface EVENTTYPE {
    _id: string,
    email: string;
    title: string;
    price: string;
    feild: string;
    organizer: string;
    time: string;
    place: string;
    description: string;
    organizer_link: string;
    payment_link: string;
}

const EventSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
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
    },
});

// Check if the model already exists before defining it
const eventmodel =
    mongoose.models.event_model || mongoose.model("event_model", EventSchema);

export default eventmodel;