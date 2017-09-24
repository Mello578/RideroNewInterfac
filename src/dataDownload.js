/**
 * Created by Mello on 15.09.2017.
 */

let localStorageData = (item) => {
    return JSON.parse(localStorage.getItem(item));
};

let bookNoImage = () => {
    const bookNoImage = {
        id: 'noImage',
        photo: require(`../img/noFoto.png`)
    };
    localStorage.setItem('bookNoImage', JSON.stringify(bookNoImage));
};

let setImageBook = (item) => {

    let imageArray = JSON.parse(item);
    let bookImageAndId = [];
    for (let i = 0; i < imageArray.length; i++) {
        let book = {
            id: imageArray[i].id,
            photo: imageArray[i].photo ? require(`../img/${imageArray[i].photo}`) : ''
        };
        bookImageAndId.push(book);
    }
    localStorage.setItem('bookImage', JSON.stringify(bookImageAndId));
};

function load(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onloadend = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }
        };
        xhr.send(null);
    })
}

export const dataDownload = (data) => {
    bookNoImage();
    if (!localStorage.getItem(data)) {
        return load('../book.json')
            .then((text) => {
                localStorage.setItem(data, text);
                setImageBook(text);
                return localStorageData(data);
            })
            .catch((error) => {
                alert('Ошибка загрузки списка ' + data + '. Код ошибки - ' + error);
            });
    } else {
        return Promise.resolve(localStorageData(data));
    }
};
