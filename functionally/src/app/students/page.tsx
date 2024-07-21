'use client';
// import { fetchStudents } from '@/lib/students/fetchStudents';
import { Student } from '@/lib/types';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';

const Page = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const querySnapshot = collection(db, 'students');
    const unsubscribe = onSnapshot(querySnapshot, (snapshot) => {
      const tempStudents: Student[] = [];
      snapshot.docs.forEach((doc) => {
        const studentData = doc.data();
        const studentId = doc.id;
        tempStudents.push({ ...studentData, id: studentId } as Student);
      });
      setStudents(tempStudents);
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>All Students</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <b>
              {student.firstName} - {student.grade}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
