import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "../../lib/prisma";

// export function GET(request: NextRequest) {
//     return NextResponse.json([
//         { id: 1, name: 'Milk', price: 3.99 },
//         { id: 2, name: 'Bread', price: 2.49 },
//         { id: 3, name: 'Tea', price: 4.99 }
//     ])
// }

export async function GET(request: NextRequest) {
    const products = await prisma.product.findMany();
    return NextResponse.json(products)
}
// create a POST endpoint that echoes back the request body
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error, { status: 400 });
    // Else, save the user to a DB
    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price,
        },
    });
    return NextResponse.json(newProduct, { status: 201 });

}