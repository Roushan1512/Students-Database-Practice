"use client";

import axios from "axios";
import { faker } from "@faker-js/faker";
import { useState } from "react";

const FakeCourses = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  const subjects = [
    "English",
    "Mathematics",
    "Science",
    "Social Studies",
    "Hindi",
    "Sanskrit",
    "Computer Science",
    "Art",
    "Music",
    "Physical Education",
    "Chemistry",
    "Physics",
    "Biology",
    "Economics",
    "History",
    "Geography",
    "Psychology",
    "Sociology",
    "Philosophy",
    "Political Science",
  ];

  const randCourses = [
    "Introduction to Sociology",
    "Data Science",
    "Classical Mechanics",
    "Abnormal Psychology",
    "Introduction to English Literature",
    "Introduction to History",
    "Introduction to Physics",
    "Introduction to Chemistry",
    "Introduction to Computer Science",
    "Introduction to Mathematics",
    "Genetics",
    "American History",
    "American Politics",
    "Environmental Economics",
    "Calculus",
    "Microeconomics",
    "Modern History",
    "Object-Oriented Programming",
    "Poetry",
    "Social Psychology",
  ];

  const getStuds = async () => {
    await axios
      .get("/api/students/getAll")
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fakeCour = async () => {
    for (var i = 0; i < 10; i++) {
      const postCourses = async () => {
        const roll =
          students[faker.number.int({ min: 0, max: students.length - 1 })].roll;
        const subject =
          subjects[faker.number.int({ min: 0, max: subjects.length - 1 })];
        const course =
          randCourses[
            faker.number.int({ min: 0, max: randCourses.length - 1 })
          ];
        const data = { roll: roll, subject: subject, course: course };
        await axios
          .post("/api/courses/new", data)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      };
      postCourses();
    }
  };

  const getCour = async () => {
    await axios
      .get("/api/courses/getAll")
      .then((res) => {
        console.log(res.data);
        setCourses(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center gap-8 p-12">
      <button
        className="h-fit w-fit border-2 border-white hover:text-black hover:bg-white p-3 rounded-full"
        onClick={getStuds}
      >
        Get Students
      </button>
      <button
        className="h-fit w-fit border-2 border-white hover:text-black hover:bg-white p-3 rounded-full"
        onClick={fakeCour}
      >
        Fake Courses
      </button>
      <button
        className="h-fit w-fit border-2 border-white hover:text-black hover:bg-white p-3 rounded-full"
        onClick={getCour}
      >
        Get Courses
      </button>
      {courses.length > 0 ? (
        <div className="h-fit w-screen flex justify-center items-center my-12">
          <table>
            <tr>
              <th>Roll</th>
              <th>Subject</th>
              <th>Course</th>
            </tr>
            {courses.map((i) => (
              <tr>
                <td className="px-8">{i.roll}</td>
                <td className="px-8">{i.subject}</td>
                <td className="px-8">{i.course}</td>
              </tr>
            ))}
          </table>
        </div>
      ) : (
        <div></div>
      )}
      <div className="h-4 w-4 opacity-0">g</div>
    </div>
  );
};

export default FakeCourses;
