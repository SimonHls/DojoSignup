import { auth, db } from "../firebase"
import { collection, query, where, getDocs } from 'firebase/firestore';

export async function getUserData(user) {
  console.log("USER:" + user?.uid);

  if (!user) return null;

  try {
    const q = query(collection(db, "users"), where("uid", "==", user?.uid));
    const doc = await getDocs(q);
    //console.log("USER:" + data.username);
    return doc.docs[0].data();
  } catch (err) {
    console.error(err);
  }

};