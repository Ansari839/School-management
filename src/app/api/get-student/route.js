import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const students = await prisma.student.findMany({
      include: {
        parent: true,
        class: true,
        grade: true,
      },
      // take: 10,
    });

    return NextResponse.json(students);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}
