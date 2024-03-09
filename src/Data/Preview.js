import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { firbaseConfig } from "../../firebaseConfig.js";

const app = initializeApp(firbaseConfig);

const db = getFirestore(app)
const previewCollection = await getDocs(collection(db, "Previews"))

let PreviewContent = [];

previewCollection.forEach((preview) => {
    PreviewContent.push({
        id: preview.id,
        ...preview.data()
    })
});

export { PreviewContent }