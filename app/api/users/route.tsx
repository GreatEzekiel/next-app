import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
//import { prisma } from "@/lib/prisma";
import { prisma } from "../../lib/prisma";

// GET for getting data
// POST for creating data
// PUT for updating data
// DELETE for deleting data

/* export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Mosh' },
        { id: 2, name: 'John' },
        { id: 3, name: 'Jane' }
    ]);
}

 */

// app/api/users/route.ts


export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}



// export async function POST(request: NextRequest) {
//     const body = await request.json();
//     return NextResponse.json(body);
// }

// export async function POST(request: NextRequest) {
//     const body = await request.json();
//     return NextResponse.json({ id: 1, name: body.name });
// }


// export async function POST(request: NextRequest) {
//     const body = await request.json();
//     // Validate the body
//     if (!body.name)
//         // If invalid, return 400 error
//         return NextResponse.json({ error: 'Name is required' }, { status: 400 });
//     // Else, save the user to a DB
//     return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
// }

// export async function POST(request: NextRequest) {
//     const body = await request.json();
//     // Validate the body
//     const validation = schema.safeParse(body);
//     if (!validation.success)
//         // If invalid, return 400 error
//         return NextResponse.json(validation.error, { status: 400 });
//     // Else, save the user to a DB
//     return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
// }

export async function POST(request: NextRequest) {
    const body = await request.json();
    // Validate the body
    const validation = schema.safeParse(body);
    if (!validation.success)
        // If invalid, return 400 error
        return NextResponse.json(validation.error, { status: 400 });

    const user = await prisma.user.findUnique({
        where: { email: body.email }
    });
    
    if (user) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }
    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
        },
    })    // Else, save the user to a DB
    return NextResponse.json(newUser, { status: 201 });
}


// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json();

//     // ✅ Validate request body
//     const validation = schema.safeParse(body);
//     if (!validation.success) {
//       return NextResponse.json(
//         { error: validation.error.issues }, // return clean messages
//         { status: 400 }
//       );
//     }

//     // ✅ Create user in DB
//     const user = await prisma.user.create({
//       data: {
//         name: body.name,
//         email: body.email,
//       },
//     });

//     return NextResponse.json(user, { status: 201 });
//   } catch (error: unknown) {
//     console.error("POST /api/users error:", error);

//     // ✅ Handle Prisma unique constraint (duplicate email)
//     if (
//       typeof error === "object" &&
//       error !== null &&
//       "code" in error &&
//       (error as { code?: string }).code === "P2002"
//     ) {
//       return NextResponse.json(
//         { error: "Email already exists" },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }



