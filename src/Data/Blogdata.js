import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { firbaseConfig } from "../../firebaseConfig.js";

const app = initializeApp(firbaseConfig);

const db = getFirestore(app)
const blogCollection = await getDocs(collection(db, "Blogs"))

let Blogdata = [];

blogCollection.forEach((blog) => {
    Blogdata.push({
        id: blog.id,
        ...blog.data()
    })
});

export const getMonthName = {
  1: "January", 2: "February", 3: "March",  4: "April", 5: "May", 6: "June", 7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"
};

// function to extract the blog date from the blog data recieved by firebase
function extractDate(fullDate) {
    const dateObj = new Date(fullDate);

    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let date = dateObj.getDate();

    return {
        year: year,
        month: month,
        date: date
    }
}

// updating the date data  in each blog object to be a formatted date object
Blogdata.map((blog) => {
    let newDateObj = extractDate(blog.published);
    blog.published = newDateObj;
});

//  Sorting the data by date in descending order
Blogdata = Blogdata.sort((a, b) =>{
    if (a.published.year > b.published.year){
      return -1;
    } else if (a.published.year < b.published.year){
      return 1;
    } else if (a.published.month > b.published.month){
      return -1;
    } else if (a.published.month < b.published.month){
      return 1;
    } else {
      return (b.published.date - a.published.date);
    }
});

export { Blogdata }