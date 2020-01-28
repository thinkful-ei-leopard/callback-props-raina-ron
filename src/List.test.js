import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe('<List />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<List {{id: "a", title: "First card", content: "lorem ipsum"}}  />, div);

        ReactDOM.unmountComponentAtNode(div);
    });
});