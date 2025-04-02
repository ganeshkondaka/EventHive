import eventmodel from "@/app/database/models/eventmodel";
import { connectDb } from "@/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { event_id: string } }) {

    await connectDb()
    const { searchParams } = new URL(req.url);
    const event_id = searchParams.get('event_id');
    
    //console.log('event_id from route:', event_id)

    try {
        const one_event = await eventmodel.findOne({ _id: event_id })
        return NextResponse.json({ one_event })
    } catch (error) {
        return NextResponse.json({ error })
    }
}