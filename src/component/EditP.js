import React, { Component } from 'react'
import { Button, Popconfirm } from 'antd';
import { fetchUpdate_P } from "../Api/api";
const text = "bạn chắc đã muốn xóa";
export default class EditP extends Component {
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
    console.log("tesss id phong", id);

    if (id != null) {
      fetchUpdate_P({
        id: id,
        tenphong: post.tenphong,
        giaphong: post.giaphong,
        giadien: post.giadien,
        gianuoc: post.gianuoc,
        tongtien: post.tongtien,
        trangthai: post.trangthai
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
