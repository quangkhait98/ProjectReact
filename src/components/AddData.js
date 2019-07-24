import React, { Component } from 'react'

export default class AddData extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false,
      id:"",
      name:"",
      phone:"",
      permisson:""
    }
  }

  isChange= (event)=>{
    const name = event.target.name;
    const value = event.target.value;
   this.setState({
     [name]: value
   })
   
  }

  changeStatus = () => {
    this.setState({
      status: !this.state.status
    });
  }

  displaybtn = () => {
    if (this.state.status === true) {
      return <div className="btn btn-block btn-outline-secondary" onClick={() => this.changeStatus()}>Đóng</div>;
    }
    else {
      return <div className="btn btn-block btn-outline-info" onClick={() => this.changeStatus()}>Thêm mới</div>;
    }
  }

  displayForm = () => {
    if (this.state.status === true) {
      
      return (
        <form>
          <div className="card border-primary mb-3 mt-2">
        <div className="card-header">thêm mới</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input type="text"  onChange={(event)=>this.isChange(event)} name="name" className="form-control" aria-describedby="helpId" placeholder="ten user" />
          </div>
          <div className="form-group">
            <input type="text" onChange={(event)=>this.isChange(event)}  name="phone" className="form-control"  aria-describedby="helpId" placeholder="Điện thoại" />
          </div>
          <div className="form-group">
            <select className="custom-select" name="permisson" onChange={(event)=>this.isChange(event)} required>
              <option value="">Select one</option>
              <option value={1}>admin</option>
              <option value={2}>manager</option>
              <option value={3}>member</option>
            </select>
          </div>
          .<div className="form-group">
            <input type="reset" onClick={(name,phone,permisson)=>this.props.addUser(this.state.name,this.state.phone,this.state.permisson)}  className="btn btn-block btn-primary" value="Thêm
              mới"/>
          </div>
        </div>
       
      </div>
      </form>)
    }
  }
  render() {
    return (
      <div className="col-3">
        <div>
          {this.displaybtn()}
          {this.displayForm()}
        </div>
      </div>

    )
  }
}
