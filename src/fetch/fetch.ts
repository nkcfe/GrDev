import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  orderBy,
  limit,
  startAfter,
  DocumentData,
} from "firebase/firestore";
import { Contents, Projects } from "../interface/interface";
import { db } from "../firebase";
import { Comments } from "../interface/interface";
import { MutationFunction } from "react-query";

export const fetchContents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "contents"));
    const initialContents: Contents[] = [];
    querySnapshot.forEach((doc) => {
      initialContents.push({ ...doc.data() } as Contents);
    });
    return initialContents;
  } catch (error) {
    console.error("Error fetching Contents Data:", error);
    throw new Error("Failed to fetch contents");
  }
};

export const firstLimitedContents = async () => {
  const first = query(
    collection(db, "contents"),
    orderBy("creationDate"),
    limit(5)
  );

  const contentSnap = await getDocs(first);
  return contentSnap;
};

export const nextLimitedContents = async (pageParam: any) => {
  try {
    const next = query(
      collection(db, "contents"),
      orderBy("creationDate"),
      limit(5),
      startAfter(pageParam)
    );
    const nextSnap = await getDocs(next);
    return nextSnap;
  } catch (error) {
    console.error("Error fetching Contents Data:", error);
    throw new Error("Failed to fetch contents");
  }
};

export const fetchAddContents = async (newContent: Contents) => {
  try {
    await setDoc(doc(db, "contents", newContent.id), newContent);
  } catch (error) {
    console.error("Error Add Content Data:", error);
    throw new Error("Failed to Add contents");
  }
};

export const deleteContent = async (contentId: string) => {
  const contentRef = doc(db, "contents", contentId);
  await deleteDoc(contentRef);

  try {
    const contentRef = doc(db, "contents", contentId);
    await deleteDoc(contentRef);
  } catch (error) {
    console.error("Error Delete Content Data:", error);
    throw new Error("failed to Delete content");
  }
};

export const updateContent: MutationFunction<
  void,
  { content: Contents; titleValue: string; bodyValue: string }
> = async ({ content, titleValue, bodyValue }) => {
  try {
    const contentRef = doc(db, "contents", content.id);
    await updateDoc(contentRef, {
      ...content,
      title: titleValue,
      body: bodyValue,
    });
  } catch (error) {
    console.error("Error Update Content Data:", error);
    throw new Error("failed to update comment");
  }
};

export const fetchComments = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "comments"));
    const initialComments: Comments[] = [];
    querySnapshot.forEach((doc) => {
      initialComments.push({ ...doc.data() } as Comments);
    });
    return initialComments;
  } catch (error) {
    console.error("Error fetching Comments Data:", error);
    throw new Error("Failed to fetch Comments");
  }
};

export const fetchAddComments = async (newComment: Comments) => {
  try {
    await setDoc(doc(db, "comments", newComment.id), newComment);
  } catch (error) {
    console.error("Error Add Comment Data:", error);
    throw new Error("Failed to Add comment");
  }
};

export const deleteComments = async (commentId: string) => {
  try {
    const commentRef = doc(db, "comments", commentId);
    await deleteDoc(commentRef);
  } catch (error) {
    console.error("Error Delete Comment Data:", error);
    throw new Error("failed to Delete comment");
  }
};

export const updateComments: MutationFunction<
  void,
  { id: string; comment: Comments; chatValue: string }
> = async ({ id, comment, chatValue }) => {
  try {
    const commentRef = doc(db, "comments", id);
    await updateDoc(commentRef, { ...comment, text: chatValue });
  } catch (error) {
    console.error("Error Update Comment Data:", error);
    throw new Error("failed to update comment");
  }
};

export const fetchGetProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const initialProjects: Projects[] = [];
    querySnapshot.forEach((doc) => {
      initialProjects.push({ ...doc.data() } as Projects);
    });
    return initialProjects;
  } catch (error) {
    console.error("Error fetching Projects Data:", error);
    throw new Error("Failed to fetch Projects");
  }
};

export const fetchAddProjects = async (newProject: Projects) => {
  try {
    await setDoc(doc(db, "projects", newProject.id), newProject);
  } catch (error) {
    console.error("Error Add Project Data:", error);
    throw new Error("Failed to Add projects");
  }
};
