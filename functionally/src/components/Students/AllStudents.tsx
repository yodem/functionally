'use client';

import React from 'react';
import Link from 'next/link';
import { Student } from '@/lib/types';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/app/firebaseConfig';

const AllStudents: React.FC = () => {
  const [students, setStudents] = React.useState<Student[]>([]);

  const unsub = onSnapshot(
    doc(db, 'students', 'pgvVfKFaMAq7nGeriKHc'),
    (doc) => {},
  );

  return (
    <>
      <h1>All Students</h1>

      <ul>
        {students?.map((student) => (
          <li key={student.id}>
            <Link href={`/students/${student.id}`}>
              - {student.firstName} {student.lastName} - {student.grade} -{' '}
              {student.school}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AllStudents;
