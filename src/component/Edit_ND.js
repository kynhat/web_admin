import React, { Component } from 'react'
import { Button, Popconfirm } from 'antd';
import { fetchUpdate_ND} from "../Api/api";
const text = "bạn chắc đã muốn xóa";
export default class Edit_ND extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }


    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    // window.location.reload();
    const { onEdit, post, id } = this.props;
    console.log("tesss id ND", id);

    if (id != null) {
      fetchUpdate_ND({
        id: id,
        tennd: post.tennd,
        MaND: post.mand,
        SDT: post.sdt,
        gioitinh:post.gioitinh,
        Songuoi: post.songuoi,
        ngaydat: post.ngaydat,
        ngayhuy: post.ngayhuy,
      })
    }
  }
  render() {

    return (
      <div className=" ">
        <Popconfirm
          placement="topRight"
          title={text}
          onConfirm={(e) => this.handleEdit()}
          >
          <Button
            className="ant-btn ant-btn-primary ant-btn-sm  "
          >
            Sửa
          </Button>
        </Popconfirm>

      </div>
    )
  }
}
