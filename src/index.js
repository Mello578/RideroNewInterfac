import React from "react";
import {render} from "react-dom";
import '..//style/style.css';
import {TableBook} from './tableBook';


class App extends React.Component {


    refreshFilterString(event){
        this.setState({filterEvent: event});
    }

    render() {

        return (
            <div>
                <div className="headWorkingField headPosition">
                    <h1 className="textFont">Моя библиотека</h1>
                </div>
                <TableBook
                    allBook={this.props.allBook}
                />
            </div>
        )
    }
}


(() => {

        const dataDownload = require('./dataDownload');

   const allBook = dataDownload('book');
   debugger
        render(<App allBook={allBook}/>,
            document.getElementById('content'));

})();



// (() => {
//     new Promise((resolve) => {
//         const dataDownload = require('./dataDownload');
//         resolve(dataDownload('book'));
//     }).then((allBook) => {
//         render(<App allBook={allBook}/>,
//             document.getElementById('content'));
//     });
// })();
