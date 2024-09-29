"use client";

import { faker } from "@faker-js/faker";
import axios from "axios";
import { useState } from "react";

const FakeStudents = () => {
  const [students, setStudents] = useState([]);
  const batches = ["a1", "a2", "b1", "b2", "c1", "c2"];

  const fakeStuds = async () => {
    for (var i = 0; i < 10; i++) {
      const postStudents = async () => {
        const name = faker.person.firstName();
        const age = faker.number.int({ min: 16, max: 34 });
        const k = faker.number.int({ min: 0, max: 5 });
        const batch = batches[k];
        const data = {
          name: name,
          age: age,
          batch: batch,
        };
        await axios
          .post("/api/students/new", data)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      };
      postStudents();
    }
  };

  const getStuds = async () => {
    await axios
      .get("/api/students/getAll")
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center gap-8 p-12">
      <button
        className="h-fit w-fit border-2 border-white hover:text-black hover:bg-white p-3 rounded-full"
        onClick={fakeStuds}
      >
        Fake students
      </button>
      <button
        className="h-fit w-fit border-2 border-white hover:text-black hover:bg-white p-3 rounded-full"
        onClick={getStuds}
      >
        Get students
      </button>
      {students.length > 0 ? (
        <div className="h-fit w-screen flex justify-center items-center my-12">
          <table>
            <tr>
              <th>Roll</th>
              <th>Name</th>
              <th>Age</th>
              <th>Batch</th>
            </tr>
            {students.map((i) => (
              <tr>
                <td className="px-8">{i.roll}</td>
                <td className="px-8">{i.name}</td>
                <td className="px-8">{i.age}</td>
                <td className="px-8">{i.batch}</td>
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

export default FakeStudents;
