import React from "react";
import "./DonDHItem.css";

export class DonDHItem extends React.Component {
  render() {
    var { itemDH } = this.props;
    return (
      <li class="order__item">
        <img src={itemDH.product.image} />
        <div class="item__detail">
          <p class="item__name">{itemDH.product.name}</p>
          <p class="item__price">{itemDH.product.price}.000 VNĐ</p>
          <p class="item__quantity">Số lượng: {itemDH.quantity}</p>
        </div>
      </li>
    );
  }
}

export default DonDHItem;
