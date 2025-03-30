import usermodel from "@/app/database/models/usermodel"
import { connectDb } from "@/db"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const { username, email, password } = await req.json()
    try {
        await connectDb()
        const existed_user = await usermodel.findOne({
            email,
            password
        })
        if (!existed_user) {
            return NextResponse.json({ msg: "user already existed" })
        }
        const same = existed_user.password == password
        if (!same) {
            return NextResponse.json({ msg: "invalid creadentials" })
        }
        // const existed_user
        // console.log('user created :', user)
        // return NextResponse.json({ user })

    } catch (error) {
        console.log('internal server error user creating :', error)
        return NextResponse.json(error)
    }
}

