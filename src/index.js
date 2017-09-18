import React from "react";
import {render} from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
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
    new Promise((resolve) => {
        const dataDownload = require('./dataDownload');
        resolve(dataDownload('book'));
    }).then((allBook) => {
        render(<App allBook={allBook}/>,
            document.getElementById('content'));
    });
})();

