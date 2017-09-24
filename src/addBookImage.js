/**
 * Created by Mello on 20.09.2017.
 */

export const addBookImage = (book) => {
    const noPhoto = JSON.parse(localStorage.getItem('bookNoImage'));
    const allBook = JSON.parse(localStorage.getItem('bookImage'));
    let bookImage;
    if (book && book.photo) {
        bookImage = allBook.find((item) => {
            return item.id === book.id
        });
    } else {
        bookImage = noPhoto;
    }
    return bookImage.photo;
};




