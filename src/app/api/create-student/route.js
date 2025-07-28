import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST() {
  try {
    const parent = await prisma.parent.create({
      data: {
        username: 'parent' + Math.floor(Math.random() * 1000),
        name: 'Test',
        surname: 'Parent',
        phone: '03000000000',
        email: 'parent@test.com',
        address: 'Lahore',
      }
    });

    const grade = await prisma.grade.create({
      data: { level: Math.floor(Math.random() * 100) }
    });

    const classObj = await prisma.class.create({
      data: {
        name: 'Class' + Math.floor(Math.random() * 100),
        capacity: 30,
        gradeId: grade.id
      }
    });

    const student = await prisma.student.create({
      data: {
        username: 'user' + Math.floor(Math.random() * 1000),
        name: 'Ali',
        surname: 'Test',
        email: 'ali' + Math.floor(Math.random() * 1000) + '@test.com',
        phone: '03001234567',
        address: 'Test Address',
        img: '/ali.png',
        bloodType: 'A+',
        sex: 'MALE',
        birthday: new Date('2008-05-15'),
        parentId: parent.id,
        classId: classObj.id,
        gradeId: grade.id,
      }
    });

    return NextResponse.json(student, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
  }
}
