import { getFirebase } from "react-redux-firebase";
import "firebase/storage";
// import { v4 as uuidv4 } from "uuid";

export const uploadImageEdith = async (file, fileName, uid) => {
  return new Promise(function (resolve, reject) {
    const firebase = getFirebase();

    var storageRef = firebase.storage().ref();
    // Create a child reference

    // var imageRef = storageRef.child(fileName);
    // imagesRef now points to 'images'

    // var randomUuid = uuidv4();
    // generate random uuid for unique name in firestore storage

    // Child references can also take paths delimited by '/'
    var spaceRef = storageRef.child(
      `${uid}/userImages/${fileName}`
    );
    // spaceRef now points to "images/space.jpg"
    // imagesRef still points to "images"

    // Create the file metadata
    var metadata = {
      contentType: file.type,
      name: `${fileName}`
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = spaceRef.put(file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function (snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      function (error) {
        console.log("error", error);
        reject(error);
      },
      function complete() {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          resolve(downloadURL);
        });
      }
    );
  });
};

export const deletePhoto = async (photo) => {
  return new Promise(function (resolve, reject) {
    const firebase = getFirebase();
    var storageRef = firebase.storage().ref();
    const user = firebase.auth().currentUser;
    // Create a reference to the file to delete
    var photoRef = storageRef.child(`${user.uid}/userImages/${photo.name}`);

    // Delete the file
    photoRef
      .delete()
      .then(function () {
        console.log("Delete was successful");
        resolve();
      })
      .catch(function (error) {
        console.log("Uh-oh, an error occurred!");
        reject(error);
      });
  });
};