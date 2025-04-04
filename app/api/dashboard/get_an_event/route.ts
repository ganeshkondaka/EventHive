import eventmodel from "@/app/database/models/eventmodel";
import { connectDb } from "@/db";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
export async function GET(req: Request, { params }: { params: { event_id: string } }) {

    await connectDb()
    const auth = req.headers.get('authorization')
    // console.log("auth is :", auth)

    if (!auth) {
        return NextResponse.json({ msg: "unauthorized , JWT token is required ", auth: false })
    }

    const { searchParams } = new URL(req.url);
    const event_id = searchParams.get('event_id');

    //console.log('event_id from route:', event_id)

    try {
        const decode_user = jwt.verify(auth, process.env.jwt_secret as string)
        console.log('decode_user is : ', decode_user)
        const one_event = await eventmodel.findOne({ _id: event_id })
        return NextResponse.json({ one_event, auth: true })
    } catch (error) {
        return NextResponse.json({ error })
    }
}