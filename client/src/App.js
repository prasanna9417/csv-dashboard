import React from 'react'
import { Badge } from 'reactstrap'
import CSVTable from './components/table'
import Search from './components/search'
import Upload from './components/upload'
import _ from 'lodash'

 
export default class App extends React.Component { 
  constructor(props) {
      super(props) 
      this.state = {
        csvdata:[],
        filteredData:[],
        searchInput:false
      }
  }
  
  handleData=data=>{
    this.setState({formatError:''})
    this.setState({csvdata:data})
    this.setState({searchInput:false})
  }

  handleFilteredData=data=>{
    this.setState({filteredData:data})
  }

  handleSearchInput=()=>{
    this.setState({searchInput:true})
  }
  
  render() {
      const data = this.state.searchInput ? this.state.filteredData : this.state.csvdata
      console.log(data)
      return (
        <div align="center">
          <h2><Badge color="dark">CSV Dashboard</Badge></h2>
          <Upload handleData={this.handleData}/>
          <Search handleFilteredData={this.handleFilteredData} data={this.state.csvdata} handleSearchInput={this.handleSearchInput}/>
          { 
            !_.isEmpty(this.state.csvdata) && <CSVTable csvdata={data} />
          }
        </div>
      )
  }
}