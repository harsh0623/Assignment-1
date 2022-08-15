import { addDoc,collection } from "firebase/firestore"
import db from "../firebase"


const addStudentToFirebase = async(student) => {
    await addDoc(collection(db,"Student"),student)
}

export { addStudentToFirebase };