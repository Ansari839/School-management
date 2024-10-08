const { Day, PrismaClient, UserSex } = require("@prisma/client");
const { ObjectId } = require("mongodb");
const prisma = new PrismaClient();

async function main() {
  // Clear existing data (optional)
  await prisma.attendance.deleteMany({});
  await prisma.result.deleteMany({});
  await prisma.assignment.deleteMany({});
  await prisma.exam.deleteMany({});
  await prisma.lesson.deleteMany({});
  await prisma.student.deleteMany({}); // Clear students before classes
  await prisma.class.deleteMany({});
  await prisma.teacher.deleteMany({});
  await prisma.subject.deleteMany({});
  await prisma.grade.deleteMany({});
  await prisma.admin.deleteMany({});

  // ADMIN
  await prisma.admin.createMany({
    data: [
      { id: new ObjectId(), username: "admin1" },
      { id: new ObjectId(), username: "admin2" },
    ],
  });

  // GRADE
  const grades = await prisma.grade.createMany({
    data: Array.from({ length: 6 }, (_, i) => ({ level: i + 1 })),
  });

  // Retrieve grades to use their IDs
  const allGrades = await prisma.grade.findMany();

  // SUBJECT
  const subjectData = [
    { name: "Mathematics" },
    { name: "Science" },
    { name: "English" },
    { name: "History" },
    { name: "Geography" },
    { name: "Physics" },
    { name: "Chemistry" },
    { name: "Biology" },
    { name: "Computer Science" },
    { name: "Art" },
  ];

  await prisma.subject.createMany({ data: subjectData });

  // Retrieve subjects to use their IDs
  const allSubjects = await prisma.subject.findMany();

  // CLASS
  const classes = await prisma.class.createMany({
    data: Array.from({ length: 6 }, (_, i) => ({
      name: `${i + 1}A`,
      gradeId: allGrades[i].id,
      capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
    })),
  });

  // Retrieve classes to use their IDs
  const allClasses = await prisma.class.findMany();

  // TEACHER
  const teachers = await prisma.teacher.createMany({
    data: Array.from({ length: 15 }, (_, i) => ({
      id: new ObjectId(),
      username: `teacher${i + 1}`,
      name: `TName${i + 1}`,
      surname: `TSurname${i + 1}`,
      email: `teacher${i + 1}@example.com`,
      phone: `123-456-789${i + 1}`,
      address: `Address${i + 1}`,
      bloodType: "A+",
      sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
      birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 30)),
    })),
  });

  // Retrieve teachers to use their IDs
  const allTeachers = await prisma.teacher.findMany();

  // LESSON
  const lessons = await prisma.lesson.createMany({
    data: Array.from({ length: 30 }, (_, i) => ({
      id: new ObjectId(),
      name: `Lesson${i + 1}`,
      day: Day[
        Object.keys(Day)[Math.floor(Math.random() * Object.keys(Day).length)]
      ],
      startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
      endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
      subjectId: allSubjects[i % allSubjects.length].id,
      classId: allClasses[i % allClasses.length].id,
      teacherId: allTeachers[i % allTeachers.length].id,
    })),
  });

  // Retrieve lessons to use their IDs
  const allLessons = await prisma.lesson.findMany();

  // EXAM
  const exams = await prisma.exam.createMany({
    data: Array.from({ length: 10 }, (_, i) => ({
      id: new ObjectId(),
      title: `Exam ${i + 1}`,
      startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
      endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
      lessonId: allLessons[i % allLessons.length].id,
    })),
  });

  // ASSIGNMENT
  const assignments = await prisma.assignment.createMany({
    data: Array.from({ length: 10 }, (_, i) => ({
      id: new ObjectId(),
      title: `Assignment ${i + 1}`,
      startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
      lessonId: allLessons[i % allLessons.length].id,
    })),
  });

  // STUDENT
  const students = await prisma.student.createMany({
    data: Array.from({ length: 10 }, (_, i) => ({
      id: new ObjectId(),
      username: `student${i + 1}`,
      name: `SName${i + 1}`,
      surname: `SSurname${i + 1}`,
      email: `student${i + 1}@example.com`,
      phone: `123-456-789${i + 1}`,
      address: `Address${i + 1}`,
      bloodType: "B+",
      sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
      birthday: new Date(new Date().setFullYear(new Date().getFullYear() - 15)),
      parentId: new ObjectId(),
      classId: allClasses[i % allClasses.length].id,
      gradeId: allGrades[i % allGrades.length].id,
    })),
  });

  // RESULT
  const allStudents = await prisma.student.findMany();
  await prisma.result.createMany({
    data: Array.from({ length: 10 }, (_, i) => ({
      score: 90,
      studentId: allStudents[i % allStudents.length].id,
      ...(i < 5
        ? { examId: allLessons[i % allLessons.length].id }
        : { assignmentId: allLessons[i - (5 % allLessons.length)].id }),
    })),
  });

  // ATTENDANCE
  await prisma.attendance.createMany({
    data: Array.from({ length: 10 }, (_, i) => ({
      date: new Date(),
      present: true,
      studentId: allStudents[i % allStudents.length].id,
      lessonId: allLessons[i % allLessons.length].id,
    })),
  });

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
