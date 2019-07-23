import React, { Component } from 'react'

export default class Search extends Component {

    constructor(props){
        super(props);
        this.state={
            tamp:''
        }
    }

    isChange = (event)=>{
        //console.log(event.target.value);
        this.setState({
            tamp : event.target.value
        },()=>{
            this.props.getSearch(this.state.tamp)});
        
    }
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange={(event)=>this.isChange(event)} aria-describedby="helpId" placeholder="nhập từ khóa tìm kiếm" />
                        <div className="btn btn-info" onClick={(textSearch)=>this.props.getSearch(this.state.tamp)}>Tìm</div>
                    </div>
                </div>          
            </div>
        )
    }
}
