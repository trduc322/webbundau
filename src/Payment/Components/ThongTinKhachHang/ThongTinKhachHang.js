import React from "react"
import './ThongTinKhachHang.css';

class ThongTinKhachHang extends React.Component{
    render()  {
        return(
          <form id="user__form">
            <h2 class="section__title">THÔNG TIN KHÁCH HÀNG</h2>
            <div>
              <div class="section__name">
                <label for="name">Họ tên</label>
                <input type="text" id="name" name="name" placeholder="Nguyễn Văn A" required />
              </div>
              <div class="section__phone">
                <label for="phone">Số điện thoại</label>
                <input type="number" id="phone" name="phone" placeholder="0905 69 69 69" required />
              </div>
              <div class="section__email">
                <label for="email">Email</label>
                <input type="email" id="emailttkh" name="email" placeholder="abc@gmail.com" />
              </div>
            </div>
            <div>
              <div class="section__address">
                <label for="address">Địa chỉ</label>
                <input type="text" id="address" name="address" placeholder="Số nhà, tên đường, quận, thành phố" required />
              </div>
              <div class="section__note">
                <label for="note">Ghi chú</label>
                <textarea name="note" id="note"></textarea>
              </div>
            </div>
          </form>   
        )
    }
}

export default ThongTinKhachHang;
