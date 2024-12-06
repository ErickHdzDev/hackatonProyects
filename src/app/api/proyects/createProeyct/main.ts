import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db.ts";
import { proyects } from "~/server/db/schemas.ts";

export async function POST(req: NextRequest) {

    const { name, description } = await req.json();

    if (!name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    try{
        const proyect = await db.insert(proyects).values({
            name,
            description,
        })
        return NextResponse.json(proyect, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Error creating proyect" }, { status: 500 });
    }
}

