import React, { Component } from 'react'

export default class TableDataRow extends Component {

    showPermisson = () => {
        if (this.props.data.permisson === 1) {
            return "Admin";
        } else if (this.props.data.permisson === 2) {
            return "Manager";
        } else {
            return "Member";
        }
    }
    render() {
        return (

            <tr>
                <td>{this.props.stt+1}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.phone}</td>
                <td>{this.showPermisson()}</td>
                <td>
                    <div className="btn btn-warning sua"><i className="fa fa-edit">edit</i></div>
                    <div className="btn btn-danger sua"><i className="fa fa-edit">delete</i></div>
                </td>
            </tr>
        )
    }
}
