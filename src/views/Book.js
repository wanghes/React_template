import React from 'react';
import { hot } from 'react-hot-loader';

class Book extends React.Component {
    render() {
        return (
            <div style={{
                display:"flex",
                justifyContent:"center",
                padding:"15px",
                boxSizing:"border-box"
            }}>Book</div>
        )
    }
}

export default hot(module)(Book);
