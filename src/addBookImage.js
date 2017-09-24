/**
 * Created by Mello on 20.09.2017.
 */


//const allBook = JSON.parse(localStorage.getItem('bookImage'));

// let allBook = () =>{
//     const books = JSON.parse(localStorage.getItem('bookImage'));
//   return books ? books : allBook();
// };

export const addBookImage = (book) => {
    let a;

    a = book && book.photo
        ? book
        : JSON.parse(localStorage.getItem('bookNoImage'));

    return a.imageSrc;
};




