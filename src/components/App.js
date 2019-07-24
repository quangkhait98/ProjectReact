import React,{Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddData from './AddData';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
  
  constructor(props){
    super(props);
      this.state={
          data : DataUser,
          searchText:"",
      }
  }

  getTextSearch=(textSearch)=>{
    console.log(textSearch);   
    this.setState({
        searchText : textSearch
    });
  }

  getNewUser=(name,phone,permisson)=>{
     // console.log(item);
  
     var item ={};
     item.id= uuidv1();
     item.name= name;
     item.phone= phone;
     item.permisson=permisson;

     var items = this.state.data;
     items.push(item);
    
     this.setState({
       data : items
     })

     //console.log(this.state.data);
  }
  deleteUser = (idUser) => {  
    var  tempData = this.state.data.filter(item => item.id !== idUser);
     this.setState({
       data:tempData
     });
    }
  render() {
    
    var kq= [];
    this.state.data.forEach((element) => {
      if(element.name.indexOf(this.state.searchText) !== -1){
          kq.push(element);
      }
    })
    return(
    <div>
      <Header />
      <div className="searchForm">
        <div className="container">
          <div className="row">
               <Search getSearch={(textSearch)=> this.getTextSearch(textSearch)}/>
              <TableData datauser={kq}
                deleteUser = {(idUser) => this.deleteUser(idUser)}/>
              <AddData addUser={(name,phone,permisson)=>this.getNewUser(name,phone,permisson)}/>         
          </div>
        </div>
      </div>
    </div>
  )};
}

export default App;