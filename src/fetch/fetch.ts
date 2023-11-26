import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { Contents } from "../interface/interface";
import { db } from "../firebase";
import { Comments } from "../interface/interface";

export const fetchContents = async (
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>
) => {
  try {
    const querySnapshot = await getDocs(collection(db, "contents"));
    const initialContents: Contents[] = [];
    querySnapshot.forEach((doc) => {
      initialContents.push({ ...doc.data() } as Contents);
    });
    setContents(initialContents);
  } catch (error) {
    console.error("Error fetching Contents Data:", error);
  }
};

export const deleteContent = async (
  contentId: string,
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>
) => {
  const contentRef = doc(db, "contents", contentId);
  await deleteDoc(contentRef);

  setContents((prev) => {
    return prev.filter((element) => element.id !== contentId);
  });
};

export const updateContent = async (
  content: Contents,
  setContents: React.Dispatch<React.SetStateAction<Contents[]>>,
  titleValue: string,
  bodyValue: string
) => {
  const contentRef = doc(db, "contents", content.id);
  await updateDoc(contentRef, {
    ...content,
    title: titleValue,
    body: bodyValue,
  });
  setContents((prev) => {
    return prev.map((element) => {
      if (element.id === content.id) {
        return { ...element, title: titleValue, body: bodyValue };
      } else {
        return element;
      }
    });
  });
};

export const fetchComments = async (
  setComments: React.Dispatch<React.SetStateAction<Comments[]>>
) => {
  try {
    const querySnapshot = await getDocs(collection(db, "comments"));
    const initialContents: Comments[] = [];
    querySnapshot.forEach((doc) => {
      initialContents.push({ ...doc.data() } as Comments);
    });
    setComments(initialContents);
  } catch (error) {
    console.error("Error fetching Comments Data:", error);
  }
};

export const deleteComments = async (
  commentId: string,
  setComments: React.Dispatch<React.SetStateAction<Comments[]>>
) => {
  const commentRef = doc(db, "comments", commentId);
  await deleteDoc(commentRef);

  setComments((prev) => {
    return prev.filter((element) => element.id !== commentId);
  });
};

export const updateComments = async (
  commentId: string,
  comment: Comments,
  setComments: React.Dispatch<React.SetStateAction<Comments[]>>,
  chatValue: string
) => {
  const commentRef = doc(db, "comments", commentId);
  await updateDoc(commentRef, { ...comment, text: chatValue });
  setComments((prev) => {
    return prev.map((element) => {
      if (element.id === commentId) {
        return { ...element, text: chatValue };
      } else {
        return element;
      }
    });
  });
};
