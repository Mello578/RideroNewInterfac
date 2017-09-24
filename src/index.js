import React from "react";
import {render} from "react-dom";
import '../style/style.css';
import {TableBook} from './tableBook';
import {dataDownload} from './dataDownload';


class App extends React.Component {
    refreshFilterString(event) {
        this.setState({filterEvent: event});
    }

    render() {
        return (
            <div>
                <TableBook
                    allBook={this.props.allBook}
                />
            </div>
        )
    }
}

(() => {
    dataDownload('book')
        .then((allBook) => {
            render(<App allBook={allBook}/>,
                document.getElementById('content'));
        });
})();
