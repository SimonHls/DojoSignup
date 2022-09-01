import { db } from "../../../firebase"
import { collection, onSnapshot, query, orderBy, get } from 'firebase/firestore';

export function getUserFirstName(user) {
  const userRef = db.collection('users').doc(user.uid)
}