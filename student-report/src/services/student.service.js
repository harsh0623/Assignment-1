import { addDoc,collection, getDocs } from "firebase/firestore"
import db from "../firebase"


const addStudentToFirebase = async (student) => {
    try {
        await addDoc(collection(db, "Student"), student)
    }
    catch (error) {
        console.log("Error in adding student in Firebase")
    }
}
const getStudentsFromFirebase = async () => {
    const documents = await getDocs(collection(db, "Student"))
    const students = documents.docs.map(doc => doc.data())
    return students;
}

export { addStudentToFirebase , getStudentsFromFirebase };