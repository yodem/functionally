import { db } from '@/app/firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import { Student } from '../types';

export async function fetchStudents() {
  try {
    const querySnapshot = await getDocs(collection(db, 'students'));
    const students = querySnapshot.docs.map((doc) => {
      const studentData = doc.data();
      const studentId = doc.id;
      return { ...studentData, id: studentId } as Student;
    });

    return students;
  } catch (error) {
    console.error('Error fetching students:', error);
    throw error;
  }
}
