import usermodel from "@/app/database/models/usermodel"
import { connectDb } from "@/db"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(req: Request) {
    const { username, email, password } = await req.json()
    try {
        await connectDb()

        const existed_user = await usermodel.findOne({ email })
        console.log('exitsed user in signup :', existed_user)

        if (existed_user) {
            return NextResponse.json({ msg: "user already existed" })
        }

        const user = await usermodel.create({
            username,
            email,
            password
        })
        const secret = process.env.jwt_secret;

        if (!secret) {
            throw new Error("JWT secret is not defined in environment variables");
        }

        const token = jwt.sign(
            { email: username.email, id: username.id },
            secret,
            { expiresIn: "30d" }
        );
        console.log('user , token created  :', user,token)
        return NextResponse.json({ user, token, msg: "user created successfully" })

    } catch (error) {
        console.log('internal server error user creating :', error)
        return NextResponse.json(error)
    }
}

