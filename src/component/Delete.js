import React, { Component } from "react";
import { Button, Popconfirm } from "antd";
import { fetchDataPostData_ND, fetchDelete_ND } from "../Api/api";
// import CollectionCreateForm from "./EditFrom";
const text = "bạn chắc đã muốn xóa";
export class Delete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { onDelete, post } = this.props;
        console.log("tesst id----------", post);
        if (onDelete) {
            onDelete(post);
        }
    }

    render() {
        return (
            <div className=" " style={{  }}>
                {/* border-bottom */}
                <div className=" ">
                    <div className=" row ">
                        <div className="col  ">
                            <Popconfirm
                                placement="topRight"
                                title={text}
                                onConfirm={(e) => this.handleClick()}
                                okText="Yes"
                                cancelText="No">
                                <Button
                                    className="ant-btn mr-1 ant-popover-open ant-btn-danger ant-btn-sm "
                                >
                                    xóa
                                </Button>
                            </Popconfirm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Delete;

