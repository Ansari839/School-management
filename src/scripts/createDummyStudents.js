// scripts/createDummyStudents.js
// import prisma from '../lib/prisma.js'; // 👈 adjust path if needed

// async function main() {
//   const parent = await prisma.parent.create({
//     data: {
//       username: 'parent' + Math.floor(Math.random() * 1000),
//       name: 'Test Parent',
//       surname: 'One',
//       phone: '03001234500',
//       email: 'parent' + Math.floor(Math.random() * 1000) + '@test.com',
//       address: 'Islamabad',
//       createdAt: new Date(),
//     }
//   });

//   const grade = await prisma.grade.create({
//     data: {
//       level: Math.floor(Math.random() * 100),
//     }
//   });

//   const classObj = await prisma.class.create({
//     data: {
//       name: 'Class ' + Math.floor(Math.random() * 100),
//       capacity: 30,
//       gradeId: grade.id,
//     }
//   });

//   await prisma.student.createMany({
//     data: [
//       {
//         username: 'ali' + Math.floor(Math.random() * 1000),
//         name: 'Ali',
//         surname: 'Khan',
//         email: 'ali' + Math.floor(Math.random() * 1000) + '@test.com',
//         phone: '03001234567',
//         address: 'Lahore',
//         img: '/ali.png',
//         bloodType: 'A+',
//         sex: 'MALE',
//         birthday: new Date('2008-05-15'),
//         createdAt: new Date(),
//         parentId: parent.id,
//         classId: classObj.id,
//         gradeId: grade.id
//       },
//       {
//         username: 'sana' + Math.floor(Math.random() * 1000),
//         name: 'Sana',
//         surname: 'Malik',
//         email: 'sana' + Math.floor(Math.random() * 1000) + '@test.com',
//         phone: '03001234599',
//         address: 'Karachi',
//         img: '/sana.png',
//         bloodType: 'B+',
//         sex: 'FEMALE',
//         birthday: new Date('2009-08-25'),
//         createdAt: new Date(),
//         parentId: parent.id,
//         classId: classObj.id,
//         gradeId: grade.id
//       }
//     ]
//   });

//   console.log('✅ Dummy students inserted successfully');
// }

// main()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect());



import prisma from '../lib/prisma.js';
import { ObjectId } from 'bson'; // Required for MongoDB ObjectId



async function main() {
  // ADMIN
  await prisma.admin.createMany({
    data: [
      { username: "admin1" },
      { username: "admin2" },
    ],
  });

  // GRADES
  for (let i = 1; i <= 6; i++) {
    await prisma.grade.create({
      data: { level: i },
    });
  }

  // CLASSES
  for (let i = 1; i <= 6; i++) {
    await prisma.class.create({
      data: {
        name: `${i}A`,
        grade: { connect: { level: i } },
        capacity: Math.floor(Math.random() * 6) + 15, // Random 15-20
      },
    });
  }

  // SUBJECTS
  const subjects = [
    "Mathematics", "Science", "English", "History", "Geography",
    "Physics", "Chemistry", "Biology", "Computer Science", "Art"
  ];
  for (const name of subjects) {
    await prisma.subject.create({ data: { name } });
  }

  // TEACHERS
  const allSubjects = await prisma.subject.findMany();
  const allClasses = await prisma.class.findMany();

  for (let i = 1; i <= 15; i++) {
    const teacher = await prisma.teacher.create({
      data: {
        username: `teacher${i}`,
        name: `TName${i}`,
        surname: `TSurname${i}`,
        email: `teacher${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        bloodType: "A+",
        sex: i % 2 === 0 ? "MALE" : "FEMALE",
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 30)),
      },
    });

    await prisma.subjectTeacher.create({
      data: {
        teacherId: teacher.id,
        subjectId: allSubjects[i % allSubjects.length].id,
      },
    });

    await prisma.class.update({
      where: { id: allClasses[i % allClasses.length].id },
      data: {
        supervisor: { connect: { id: teacher.id } },
      },
    });
  }

  // LESSONS
  const days = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY"];
  const teachers = await prisma.teacher.findMany();
  for (let i = 1; i <= 30; i++) {
    await prisma.lesson.create({
      data: {
        name: `Lesson ${i}`,
        day: days[Math.floor(Math.random() * days.length)],
        startTime: new Date(Date.now() + 3600 * 1000),
        endTime: new Date(Date.now() + 7200 * 1000),
        subjectId: allSubjects[i % allSubjects.length].id,
        classId: allClasses[i % allClasses.length].id,
        teacherId: teachers[i % teachers.length].id,
      },
    });
  }

  // PARENTS
  for (let i = 1; i <= 25; i++) {
    await prisma.parent.create({
      data: {
        username: `parent${i}`,
        name: `PName${i}`,
        surname: `PSurname${i}`,
        email: `parent${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
      },
    });
  }

  const parents = await prisma.parent.findMany();
  const grades = await prisma.grade.findMany();

  // STUDENTS
  for (let i = 1; i <= 50; i++) {
    await prisma.student.create({
      data: {
        username: `student${i}`,
        name: `SName${i}`,
        surname: `SSurname${i}`,
        email: `student${i}@example.com`,
        phone: `987-654-321${i}`,
        address: `Address${i}`,
        bloodType: "O-",
        sex: i % 2 === 0 ? "MALE" : "FEMALE",
        birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 10)),
        parentId: parents[i % parents.length].id,
        classId: allClasses[i % allClasses.length].id,
        gradeId: grades[i % grades.length].id,
      },
    });
  }

  const lessons = await prisma.lesson.findMany();
  const students = await prisma.student.findMany();

  // EXAMS
  for (let i = 0; i < 10; i++) {
    await prisma.exam.create({
      data: {
        title: `Exam ${i + 1}`,
        startTime: new Date(Date.now() + 3600 * 1000),
        endTime: new Date(Date.now() + 7200 * 1000),
        lessonId: lessons[i % lessons.length].id,
      },
    });
  }

  // ASSIGNMENTS
  for (let i = 0; i < 10; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i + 1}`,
        startDate: new Date(),
        dueDate: new Date(Date.now() + 86400 * 1000),
        lessonId: lessons[i % lessons.length].id,
      },
    });
  }

  const exams = await prisma.exam.findMany();
  const assignments = await prisma.assignment.findMany();

  // RESULTS
  for (let i = 0; i < 10; i++) {
    await prisma.result.create({
      data: {
        score: Math.floor(Math.random() * 40) + 60,
        studentId: students[i].id,
        ...(i < 5
          ? { examId: exams[i].id }
          : { assignmentId: assignments[i - 5].id }),
      },
    });
  }

  // ATTENDANCE
  for (let i = 0; i < 10; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date(),
        present: true,
        studentId: students[i].id,
        lessonId: lessons[i].id,
      },
    });
  }

  // EVENTS
  for (let i = 0; i < 5; i++) {
    await prisma.event.create({
      data: {
        title: `Event ${i + 1}`,
        description: `Description for Event ${i + 1}`,
        startTime: new Date(Date.now() + 3600 * 1000),
        endTime: new Date(Date.now() + 7200 * 1000),
        classId: allClasses[i].id,
      },
    });
  }

  // ANNOUNCEMENTS
  for (let i = 0; i < 5; i++) {
    await prisma.announcement.create({
      data: {
        title: `Announcement ${i + 1}`,
        description: `Description for Announcement ${i + 1}`,
        date: new Date(),
        classId: allClasses[i].id,
      },
    });
  }

  console.log("✅ Seeding completed successfully");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error("❌ Seeding failed", e);
    await prisma.$disconnect();
    process.exit(1);
  });