import React, { Component } from 'react'

 class TableDataRow extends Component {

    showPermisson = () => {
        if (this.props.data.permisson === 1) {
            return "Admin";
        } else if (this.props.data.permisson === 2) {
            return "Manager";
        } else {
            return "Member";
        }
    }
    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
   }
    render() {
        return (

            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.phone}</td>
                <td>{this.showPermisson()}</td>
                <td>
                    
                    <div className="btn btn-danger " onClick={(idUser) => this.deleteButtonClick(this.props.data.id)}><i className="fa fa-edit">delete</i></div>
                </td>
            </tr>
        )
    }
}

export default  (TableDataRow);