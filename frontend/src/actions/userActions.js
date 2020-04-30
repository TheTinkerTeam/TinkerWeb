import { getFirebase } from "react-redux-firebase";

export const uploadProfileImage = (file, fileName) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore }
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  const user = firebase.auth().currentUser;
  const path = `${user.uid}/user_images`;
  const options = {
    name: fileName,
  };

  // upload the file to firestore storage
  let uploadedFile = await firebase.uploadFile(path, file, null, options);
  // get url of the image
  let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
  // get userdoc
  let userDoc = await firestore.get(`users/${user.uid}`);
  console.log(userDoc);
  // check if user has photo, if not update profile
  if (!userDoc.data().photoURL) {
    await firebase.updateProfile({
      photoURL: downloadURL,
    });
    await user.updateProfile({
      photoURL: downloadURL,
    });
  }

  // // add the image to firestore
  // await firestore.add({
  //   collection: "uid",
  //   doc: user.uid,
  //   subcollections: [{ collection: "photos" }],
  // }, {
  //   name: fileName,
  //   url: downloadURL
  // });
};
