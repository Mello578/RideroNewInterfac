/**
 * Created by Mello on 20.09.2017.
 */


const allBook = JSON.parse(localStorage.getItem('bookImage'));
export const addBookImage = (book) => {
    let a;
    if(book){
        a = allBook.find((item)=>{
            return item.id === book.id
        });
    }else{
        return 'qqqq'
    }

    return a.imageSrc;
};




