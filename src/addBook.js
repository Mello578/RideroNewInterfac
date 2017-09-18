/**
 * Created by Mello on 16.09.2017.
 */

import React from 'react';
import {bookFieldNames} from './bookFieldNames';
const headers = Object.keys(bookFieldNames);
const DEFAULT_BOOK = {
    id: '',
    name: '',
    author: '',
    style: '',
    language: '',
    year: ''
};
export class AddBook extends React.Component {

    constructor() {
        super();
        this.state = {...DEFAULT_BOOK};
    }

    componentWillReceiveProps({selectedBook}) {
        this.setState(selectedBook ? selectedBook : DEFAULT_BOOK);
    }


    render() {
        const {selectedBook, visibility, onDelete, onEdit, onAdd, onCancel} = this.props;

        return (
            <div>
                <div className={`modalWindow ${visibility ? 'modalVisible' : 'modalNoVisible'}`}>
                    <div className='modalHeader'>
                        {
                            selectedBook
                                ? <h1>Редактировать</h1>
                                : <h1>Добавить</h1>
                        }
                        <img className='closeModal' src="../img/close.png" alt="close" onClick={onCancel}/>
                    </div>
                    <div className="modalContent">
                        <div className="photo photoModal">

                        </div>
                        <div>
                            {
                                headers.map((header, index) =>
                                    <div className='field' key={index}>
                                        <input id={'modal' + header} type='text' name='text'
                                               placeholder={bookFieldNames[header]}
                                               value={this.state[header]}
                                               onChange={(e) => {
                                                   this.setState({
                                                       [header]: e.target.value
                                                   })
                                               }}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            {
                                selectedBook
                                    ? <div>
                                    <button type='button'
                                            className='buttonStyle'
                                            onClick={() => onEdit({...this.state})}>Сохранить
                                    </button>
                                    <button type='button'
                                            className='buttonStyle buttonDel'
                                            onClick={() => onDelete({...this.state})}>Удалить
                                    </button>
                                </div>
                                    : <button type='button'
                                              className='buttonStyle'
                                              onClick={() => onAdd({...this.state})}>Добавить
                                </button>
                            }

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

