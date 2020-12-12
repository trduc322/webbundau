import React from "react";


export class DonDHItem extends React.Component {
  render() {
    var { itemDH } = this.props;
    return (
      <li class="order__item">
        <img src={itemDH.product.link_Anh} />
        <div class="item__detail">
          <p class="item__name">{itemDH.product.name}</p>
          <p class="item__price">{itemDH.product.giaGoc}.000 VNĐ</p>
          <p class="item__quantity">Số lượng: {itemDH.quantity}</p>
        </div>
      </li>
    );
  }
}

export default DonDHItem;
