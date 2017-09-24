/**
 * Created by Mello on 15.09.2017.
 */

let localStorageData = (item) => {
    return JSON.parse(localStorage.getItem(item));
};

let bookNoImage = () => {
    const bookNoImage = {
        id: 'noImage',
        imageSrc: require(`../img/noFoto.png`)
    };
    localStorage.setItem('bookNoImage', JSON.stringify(bookNoImage));
};

let setImageBook = (item) => {

    let imageArray = JSON.parse(item);
    let bookImageAndId = [];
    for (let i = 0; i < imageArray.length; i++) {
        let book = {
            id: imageArray[i].id,
            imageSrc: imageArray[i].photo ? require(`../img/${imageArray[i].photo}`) : ''
        };
        bookImageAndId.push(book);
    }
    localStorage.setItem('bookImage', JSON.stringify(bookImageAndId));
};

function dataDownload(data) {
    bookNoImage();
    if (!localStorage.getItem(data)) {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        xhr.open('GET', '../book.json', true);
        xhr.onloadend = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                localStorage.setItem(data, xhr.responseText);
                setImageBook(xhr.responseText);
                resolve(xhr.responseText);
            } else {
                reject(xhr.status);
            }
        };
        xhr.send(null);
    }).then(() => {

        return localStorageData(data);
    }, error => {
        alert('Ошибка загрузки списка ' + data + '. Код ошибки - ' + error);
    });
} else {
    return localStorageData(data);
}
}

module.exports = dataDownload;

// if (!localStorage.getItem(data)) {
//     let xhr = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         xhr.open('GET', '../book.json', true);
//         xhr.onloadend = function () {
//             if (xhr.readyState === 4 && xhr.status === 200) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.status);
//             }
//         };
//         xhr.send(null);
//     }).then((text) => {
//         setImageBook(text);
//         localStorage.setItem(data, text);
//         return localStorageData(data);
//     }, error => {
//         alert('Ошибка загрузки списка ' + data + '. Код ошибки - ' + error);
//     });
// } else {
//     return localStorageData(data);
// }