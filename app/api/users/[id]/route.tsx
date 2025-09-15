import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET for getting data
// POST for creating data
// PUT for updating data
// DELETE for deleting data

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }) {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(params.id) }
        });
        // If not found, return 404 error
        if (!user)
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        return NextResponse.json(user);
        // Fetch Data from a DB
        // If not found, return 404 error
        // else return the user data
    }

// export async function GET(
//     request: NextRequest,
//     { params }: { params: { id: number }}) {
//         // If not found, return 404 error
//         if (params.id > 10)
//             return NextResponse.json({ error: 'User not found' }, { status: 404 })
//         return NextResponse.json({ id: 1, name: 'Mosh' });
//         // Fetch Data from a DB
//         // If not found, return 404 error
//         // else return the user data
//     }


//  export async function PUT(
//     request: NextRequest,
//      { params }: { params: { id: number } }) {
//         // Validate the body
//         // If invalid, return 400 error
//         const body = await request.json();
//         if (!body.name)
//             return NextResponse.json({ error: 'Name is required' }, { status: 400 });
//         // Fetch the user with the given id from a DB
//         // If not found, return 404 error
//         if (params.id > 10)
//             return NextResponse.json({ error: 'User not found' }, { status: 404 })

//         // Else, update the user in the DB 

//         // Return the updated user
//         return NextResponse.json({ id: 1, name: body.name });
//     }

export async function PUT(
    request: NextRequest,
     { params }: { params: { id: string } }) {
        // Validate the body
        // If invalid, return 400 error
        const body = await request.json();
        const validation = schema.safeParse(body);
        if (!validation.success)
            return NextResponse.json(validation.error, { status: 400 });

        const user = await prisma.user.findUnique({
            where: { id: parseInt(params.id) }
        });
        // Fetch the user with the given id from a DB
        // If not found, return 404 error
        if (!user)
            return NextResponse.json({ error: 'User not found' }, { status: 404 })

        // Else, update the user in the DB 
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(params.id) },
            data: {
                name: body.name,
                email: body.email,
            }
        });

        // Return the updated user
        return NextResponse.json(updatedUser);
    }


export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }) {
    // Fetch the user with the given id from a DB
    // If not found, return 404 error
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) },
    });
    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    // Else, delete the user from the DB
    await prisma.user.delete({
        where: { id: user.id },
    });
    // Return 204 No Content
    return NextResponse.json({});
}