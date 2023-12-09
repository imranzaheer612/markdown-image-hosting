import path from "path";
import fs from "fs";
import storage from "../firebaseConfig.js";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";

const upload = async (image_path) => {
  try {
    // READING FILE
    var newLink = "";
    var imageBuffer = fs.readFileSync(image_path);

    // CREATING UNIQUE IMAGE REF
    const timestamp = Date.now();
    const full_name = path.basename(image_path);
    const dir_name = path.basename(path.dirname(image_path));
    const type = path.extname(image_path);
    const name = path.basename(full_name, type);
    const fileName = `${dir_name}_${name}_${timestamp}.${type}`;
    
    // Create a reference to the folder and the specific image
    const imageRef = ref(storage, `${dir_name}/${fileName}`);
    
    // UPLOADING
    console.log("Upload 🔃: ", image_path);
    const snapshot = await uploadBytes(imageRef, imageBuffer);
    // console.log(`Uploaded image: ${fileName}`);

    // GET UPLOADED LINK
    newLink = await getDownloadURL(imageRef);
    // console.log(`Download URL: ${newLink}`);
  } catch (error) {
    console.error(`Error uploading image:`, error);
  }
  return newLink;
};

export default upload;
