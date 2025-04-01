import eventmodel from "@/app/database/models/eventmodel";
import { connectDb } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
    await connectDb()
    try {
        const all_events = await eventmodel.find()
        return NextResponse.json({ all_events })
    } catch (error) {
        return NextResponse.json({ error })
    }
}