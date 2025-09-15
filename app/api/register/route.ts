import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
});

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.parse(body);
    // Here you would typically create the user in your database
    // For demonstration, we'll just return a success message
    if (!validation) {
        return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    };

    const user = await prisma.user.findUnique({
        where: { email: body.email }
    });
    if (user) {
        return NextResponse.json({ error: "User already exists" }, { status: 400 });
    };
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hasedPassword: hashedPassword
        }
    }); 

    return NextResponse.json({
        email: newUser.email,
    });
}