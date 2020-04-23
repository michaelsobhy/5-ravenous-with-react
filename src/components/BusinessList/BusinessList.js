import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(businessItem => <Business key={businessItem.id} business={businessItem} />)}
            </div>
        )
    }
}

export default BusinessList;