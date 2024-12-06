import { NextRequest, NextResponse } from "next/server";
import { db } from "~/server/db/db";
import { projects } from "~/server/db/schemas";

export async function POST(req: NextRequest) {

    const { name, description } = await req.json();

    if (!name) {
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    try{
        const proyect = await db.insert(projects).values({
            name,
            description,
        })
        return NextResponse.json(proyect, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Error creating proyect" }, { status: 500 });
    }
}

