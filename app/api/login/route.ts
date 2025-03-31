import usermodel from "@/app/database/models/usermodel"
import { connectDb } from "@/db"
import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export async function POST(req: Request) {
    const { email, password } = await req.json()
    try {
        await connectDb()
        
        const existed_user = await usermodel.findOne({ email })
        // console.log('exitsed user :', existed_user)

        if (!existed_user) {
            return NextResponse.json({ msg: "user not existed" })
        }

        const same = existed_user.password == password

        if (!same) {
            return NextResponse.json({ msg: "invalid creadentials" })
        }

        const secret = process.env.jwt_secret;
        if (!secret) {
            throw new Error("JWT secret is not defined in environment variables");
        }
        // const existed_user
        // console.log('login successfull :', existed_user)
        // return NextResponse.json({ user })
        const token = jwt.sign(
            { email: existed_user.email, id: existed_user.id },
            secret,
            { expiresIn: "30d" }
        );

        // console.log('existed_user , token created  :', existed_user, token)
        return NextResponse.json({ existed_user, token, msg: "user created successfully" })

    } catch (error) {
        console.log('internal server error user creating :', error)
        return NextResponse.json(error)
    }
}

