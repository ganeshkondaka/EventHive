import eventmodel from "@/app/database/models/eventmodel";
import { connectDb } from "@/db";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
    await connectDb();

    // const auth = req.headers.get("authorization");
    // if (!auth) {
    //     return NextResponse.json({ msg: "Unauthorized, JWT token is required", auth: false });
    // }

    const { searchParams } = new URL(req.url);
    const event_id = searchParams.get("event_id");
    console.log("Event ID:", event_id);

    if (!event_id) {
        return NextResponse.json({ msg: "Event ID is required", auth: false });
    }

    try {
        // const decode_user = jwt.verify(auth, process.env.jwt_secret as string);
        // console.log("Decoded user:", decode_user);

        const one_event = await eventmodel.findOne({ _id: event_id });
        if (!one_event) {
            return NextResponse.json({ msg: "Event not found", auth: true });
        }

        return NextResponse.json({ one_event, auth: true });
    } catch (error) {
        console.error("Error verifying token or fetching event:", error);
        return NextResponse.json({ error: "Internal server error", auth: false });
    }
}