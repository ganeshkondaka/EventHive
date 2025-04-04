import eventmodel from "@/app/database/models/eventmodel";
import { connectDb } from "@/db";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    await connectDb()
    const auth = req.headers.get('authorization')

    if (!auth) {
        return NextResponse.json({ msg: "unauthorized , JWT token is required ", auth: false })
    }

    // console.log("auth is :", auth)
    try {
        const decode_user = jwt.verify(auth, process.env.jwt_secret as string)
        // console.log('decode_user is : ', decode_user)
        if(!decode_user){
            return NextResponse.json({ msg: "unauthorized , JWT token is required ", auth: false })
        }
        const all_events = await eventmodel.find()
        return NextResponse.json({ all_events, auth: true, decode_user: decode_user })
    } catch (error) {
        return NextResponse.json({ error , auth: false })
    }
}