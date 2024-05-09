import { doc, getDoc } from 'firebase/firestore';
import { Student } from '../types';
import { db } from '@/app/firebaseConfig';

export async function fetchStudentById(studentId: string): Promise<Student> {
  try {
    const studentDocRef = doc(db, 'students', studentId);
    const studentDocSnapshot = await getDoc(studentDocRef);

    if (studentDocSnapshot.exists()) {
      const studentData = studentDocSnapshot.data();
      const student = { ...studentData, id: studentId } as Student;

      return student;
    } else {
      throw new Error(`Student with ID ${studentId} does not exist`);
    }
  } catch (error) {
    console.error(`Error fetching student with ID ${studentId}:`, error);
    throw error;
  }
}
