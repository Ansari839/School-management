import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(){
    try {
        const teacher = await prisma.teacher.findMany(
            console.log(teacher)
        );
    } catch (error) {
        console.log(error,"Get Teacher Error")
    }
}