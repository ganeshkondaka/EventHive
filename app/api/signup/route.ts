import usermodel from "@/app/database/models/usermodel"
import { connectDb } from "@/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { username, email, password } = await req.json()
    try {
        await connectDb()
        const user = await usermodel.create({
            username,
            email,
            password
        })
        console.log('user created :', user)
        return NextResponse.json({ user })

    } catch (error) {
        console.log('internal server error user creating :',error )
        return NextResponse.json(error)
    }
}

