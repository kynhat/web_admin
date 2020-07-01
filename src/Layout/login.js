import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Trangnguoidung from '../Layout/trangnguoidung'
import axios from 'axios';
// import UploadPage from './UploadPage';
class Login extends Component {
    constructor(props) {
        super(props);
        var localloginComponent = [];
        localloginComponent.push(
          <MuiThemeProvider key={"theme"}>
            <div>
             <TextField
               hintText="Nhập tên người dùng"
               floatingLabelText="Người dùng Id"
               onChange={(event,newValue) => this.setState({username:newValue})}
               />
             <br/>
               <TextField
                 type="password"
                 hintText="Nhập Mật khẩu"
                 floatingLabelText="Mật khẩu"
                 onChange = {(event,newValue) => this.setState({password:newValue})}
                 />
               <br/>
               <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
           </div>
           </MuiThemeProvider>
        )
        this.state = {
            username: '',
            password: '',
            menuValue: 1,
            loginComponent: localloginComponent,
            loginRole: 'student'
        }
    }
    componentWillMount() {
        // console.log("willmount prop values",this.props);
        if (this.props.role != undefined) {
            if (this.props.role == 'student') {
                console.log("in student componentWillMount");
                var localloginComponent = [];
                localloginComponent.push(
                    <MuiThemeProvider>
                        <div>
                            <TextField
                                hintText="Nhập tên người dùng"
                                floatingLabelText="Người dùng Id"
                                onChange={(event, newValue) => this.setState({ username: newValue })}
                            />
                            <br />
                            <TextField
                                type="password"
                                hintText="Nhập Mật khẩu"
                                floatingLabelText="Mật khẩu"
                                onChange={(event, newValue) => this.setState({ password: newValue })}
                            />
                            <br />
                            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                        </div>
                    </MuiThemeProvider>
                )
                this.setState({ menuValue: 1, loginComponent: localloginComponent, loginRole: 'student' })
            }
            else if (this.props.role == 'Quản lý') {
                console.log("in Quản lý componentWillMount");
                var localloginComponent = [];
                localloginComponent.push(
                    <MuiThemeProvider>
                        <div>
                            <TextField
                                hintText="Nhập tên người dùng"
                                floatingLabelText="Quản lý Id"
                                onChange={(event, newValue) => this.setState({ username: newValue })}
                            />
                            <br />
                            <TextField
                                type="password"
                                hintText="Nhập Mật khẩu"
                                floatingLabelText="Mật khẩu"
                                onChange={(event, newValue) => this.setState({ password: newValue })}
                            />
                            <br />
                            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                        </div>

                    </MuiThemeProvider>
                )
                this.setState({ menuValue: 2, loginComponent: localloginComponent, loginRole: 'Quản lý' })
            }
        }
    }
      handleClick(event){
        var self = this;
        const { history } = this.props;
        var payload={
          "name_login":this.state.username,
    	    "phone_number":this.state.password,
        //   "role":this.state.loginRole
        }
        console.log("tessst input ",payload)
        axios.post(`http://localhost:8000/api/user/login`, payload)
       .then(function (response) {
         console.log("tesss data",response);
         console.log("tesss data code",response.status);
         if(response.data.error_code == 0){
           console.log("Đăng nhập successfull");
           alert("Đăng nhập successfull");
         
           history.push('/nguoidung');
        //    self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
         }
         else if(response.data.code == 204){
           console.log("Username password do not match");
           alert(response.data.success)
         }
         else{
           console.log("Username does not exists");
           alert("Username does not exist");
         }
       })
       .catch(function (error) {
         console.log(error);
       });
      }
    handleMenuChange(value) {
        console.log("menuvalue", value);
        var loginRole;
        if (value == 1) {
            var localloginComponent = [];
            loginRole = 'student';
            localloginComponent.push(
                <MuiThemeProvider>
                    <div>
                        <TextField
                            hintText="Nhập tên người dùng"
                            floatingLabelText="Người dùng Id"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Nhập Mật khẩu"
                            floatingLabelText="Mật khẩu"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            )
        }
        else if (value == 2) {
            var localloginComponent = [];
            loginRole = 'Quản lý';
            localloginComponent.push(
                <MuiThemeProvider>
                      <div>
                            <TextField
                                hintText="Nhập tên người dùng"
                                floatingLabelText="Quản lý Id"
                                onChange={(event, newValue) => this.setState({ username: newValue })}
                            />
                            <br />
                            <TextField
                                type="password"
                                hintText="Nhập Mật khẩu"
                                floatingLabelText="Mật khẩu"
                                onChange={(event, newValue) => this.setState({ password: newValue })}
                            />
                            <br />
                            <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                        </div>


                </MuiThemeProvider>
            )
        }
        this.setState({
            menuValue: value,
            loginComponent: localloginComponent,
            loginRole: loginRole
        })
    }
    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar
                        title="Đăng nhập"
                    />
                </MuiThemeProvider>

                <MuiThemeProvider >
                    <div>

                        <DropDownMenu value={this.state.menuValue} onChange={(event, index, value) => this.handleMenuChange(value)}>
                            <MenuItem value={1} primaryText="Người dùng" />
                            <MenuItem value={2} primaryText="Quản lý" />
                        </DropDownMenu>
                    </div>
                </MuiThemeProvider>
               
                    <div style={{ paddingLeft: 20, paddingTop: 60 }}>
                        {this.state.loginComponent}
                    </div>
                   
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default Login;
