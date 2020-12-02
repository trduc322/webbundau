import React from "react"
import './DonDH.css';
import DonDHItem from './DonDHItem/DonDHItem.js';


export class DonDH extends React.Component {
    render() {
        var {children} = this.props;
        return (
            
            <ul class="order__list">
              <h2 class="section__title">ĐƠN HÀNG</h2>
              <div class="DH_items">
                {children}
              </div>
          </ul>

        )
    }
}

export default DonDH;
