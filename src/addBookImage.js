/**
 * Created by Mello on 20.09.2017.
 */

export const addBookImage = (book) => {

    return book
        ? book.photo ? require(`../img/${book.photo}`) : ''
        : '';
};