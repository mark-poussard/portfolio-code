import React from 'react';
import './IndexTitle.scss';
import IndexContact from './IndexContact';

const IndexTitle : React.FC = props => {
    return (
        <div className={`index-title`}>
            <h1>
                Mark Poussard
            </h1>
            <IndexContact />
        </div>
    )
}
export default IndexTitle;