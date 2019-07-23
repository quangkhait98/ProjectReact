import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

export default class TableData extends Component {

  mapDataUser = ()=> this.props.datauser.map((value,key)=>( <TableDataRow data={value} key={key} stt={key}/>))
  
  render() {
    return (
      <div className="col-9">
        <table className="table table-striped table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>
            {
              this.mapDataUser()
            }
          </tbody>
        </table>
      </div>

    )
  }
}
