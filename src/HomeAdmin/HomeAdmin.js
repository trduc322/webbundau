import React from "react";
import Header from "./Header/HeaderAdmin.js";
import Footer from "./Footer/Footer.js";
import "./HomeAdmin.css";
import $ from "jquery";
import DayPicker from "./Calendar/DayPicker.js";
import callApi from "./../apiCaller.js";

class HomeAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      donhangs: [],
      chitietdhs: [],
      doanhthuthang : 0,
      doanhthungay : 0
    };
  }

  format(string) {
    var result;
    var s = string.split("/");
    if(s[0].length === 1){
        s[0] = "0" + s[0]
    }
    if(s[1].length === 1){
        s[1] = "0" + s[1]
    }
    result = s[2] + "-" + s[0] + "-" + s[1];
    return result;
  }
  formatdoanhthu(string) {
    var result;
    var s = string.split("/");
    if(s[0].length === 1){
        s[0] = "0" + s[0]
    }
    if(s[1].length === 1){
        s[1] = "0" + s[1]
    }
    result = s[1] + "/" + s[0] + "/" + s[2];
    return result;
  }
  formatmonth(string) {
    var result;
    var s = string.split("/");
    if(s[0].length === 1){
        s[0] = "0" + s[0]
    }
    result =  s[0] + "/" + s[2];
    return result;
  }
  changeDate = (d) => {
    this.setState({
      date: d,
    });
  };

  // changeCTDH(idDH){
  //     callApi(`chitietdonhang/${idDH}`,"POST", null).then((res) =>{
  //         console.log(res.data)
  //         this.setState({
  //             chitietdhs : res.data,
  //         })
  //         console.log(1)
  //     })
  // }
  showDH(donhangs) {
    console.log(this.format(this.state.date.toLocaleDateString()));
    var checkdate = {
      ngayThang: this.format(this.state.date.toLocaleDateString()),
    };
    callApi("donhang/layngay", "POST", checkdate).then((res) => {
      this.setState({
        donhangs: res.data,
      });
    });
    var result = null;
    if (donhangs.length > 0) {
      result = donhangs.map((donhang, index) => {
        return (
          <DonHang
            key={index}
            donhang={donhang}
            
          />
        );
      });
    }
    return result;
  }

  showCTDH(chitietdhs) {
    var result = null;
    if (chitietdhs.length > 0) {
      result = chitietdhs.map((chitietdh, index) => {
        return <ChiTietDonHang key={index} chitietdh={chitietdh} />;
      });
    }
    return result;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <DonHangAdmin
            show={this.showDH(this.state.donhangs)}
            changeDate={this.changeDate}
          />
          <ChiTietDonHangAdmin show={this.showCTDH(this.state.chitietdhs)} />
          <TongDoanhThu date={this.formatdoanhthu(this.state.date.toLocaleDateString())} month={this.formatmonth(this.state.date.toLocaleDateString())}/>
        </div>
        <Footer />
      </div>
    );
  }
}
function DonHangAdmin(props) {
  return (
    <div>
      <div class="DonHangAdmin">
        <h1 className="Donhang_title">Đơn Hàng</h1>
        <form className="form_donhang_admin">
          <DayPicker changeDate={props.changeDate} />
          <table class="tb_donhang">
            <tr>
              <th class="th_admin1">Tên đơn hàng</th>
              <th class="th_admin1">Tên khách hàng</th>
              <th class="th_admin1">Tổng tiền</th>
            </tr>
            {props.show}
          </table>
        </form>
      </div>
    </div>
  );
}

function DonHang(props) {
  return (
    <tr>
      <td>DH{props.donhang.iD_DonHang}</td>
      <td>{props.donhang.iD_User}</td>
      <td>{props.donhang.tongTien} 000 vnd</td>
    </tr>
  );
}

function ChiTietDonHang(props) {
  return (
    <tr>
      <td>{props.chitietdh.tenThucPham}</td>
      <td>{props.chitietdh.so_Luong}</td>
      <td>{props.chitietdh.donGia}</td>
      <td>{props.chitietdh.so_Luong * props.chitietdh.donGia}</td>
    </tr>
  );
}

function ChiTietDonHangAdmin(props) {
  return (
    <div class="Chitiet_dh">
      <h1 className="Donhang_title">Chi tiết đơn hàng</h1>
      <h2 className="Ten_dh">Đơn hàng DH01</h2>
      <table class="tb_chitietdonhang">
        <tr>
          <th class="th_admin1">Tên sản phẩm</th>
          <th class="th_admin1">Số lượng</th>
          <th class="th_admin1">Đơn giá</th>
          <th class="th_admin1">Thành tiền</th>
        </tr>
        {props.show}
      </table>
      <h1 class="TongTien">Tổng tiền: 500 000 vnđ</h1>
    </div>
  );
}

function TongDoanhThu(props) {
  return (
    <div>
      <h1 className="Donhang_title">Tổng doanh thu</h1>
      <table class="tb_tongdth">
        <tr>
          <th class="th_admin1">Thời gian</th>
          <th class="th_admin1">Tổng Doanh Thu</th>
        </tr>
        <tr>
          <td>Ngày {props.date}</td>
          <td>2 000 000 vnd</td>
        </tr>
        <tr>
          <td>Tháng {props.month}</td>
          <td>120 000 000 vnd</td>
        </tr>
      </table>
    </div>
  );
}

export default HomeAdmin;
