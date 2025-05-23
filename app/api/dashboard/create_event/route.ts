import eventmodel from "@/app/database/models/eventmodel"
import usermodel from "@/app/database/models/usermodel"
import { connectDb } from "@/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    // const auth = req.headers.get('Authorization')
    // console.log('auth is;',auth)
    // if (!auth) {
    //     return NextResponse.json({ msg: "unauthorized , JWT token is required ", auth: false })
    // }

    const { form }  = await req.json()
    console.log('form is :', form)
    // const { email, title, price, feild, organizer, time, place, description, organizer_link, payment_link } = form
    // console.log(email, title, price, feild, organizer, time, place, description, organizer_link, payment_link)
    await connectDb()

    const exitsed = await usermodel.findOne({ email })
    // console.log("user exitsed to create event ", exitsed)

    if (!exitsed) {
        return NextResponse.json({
            msg: "user not existed, pls Login."
        })
    }

    try {
        const new_event = await eventmodel.create({ email, title, price, feild, organizer, time, place, description, organizer_link, payment_link })
        console.log('newevent created :', new_event)
        return NextResponse.json({
            new_event,
            msg: "event created successfully"
        })
    } catch (error) {
        // console.log('internal server error wjile creatig event :', error)
        return NextResponse.json({ error })
    }
} 