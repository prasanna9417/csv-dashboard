import React from "react";
import { Badge } from 'reactstrap'
 
export default class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          pincode: "",
          date: ""
        }
    }
    
    handleDate = e => {
        this.setState({ date: e.target.value },()=>this.handleSearch())
    }

    handlePinCode = e => {
        this.setState({ pincode: e.target.value},()=>this.handleSearch())
    }
    
    handleSearch = () => {
        const { pincode, date } = this.state
        console.log(pincode)
        let filteredData= this.props.data
       
        if(date){
            filteredData=filteredData.filter(item=>{
                return item.orderDate.includes(date)
            })
        }
        filteredData = filteredData.filter(item => {
            return item.deliveryPincode.includes(pincode)

        })
        if(pincode||date){
            this.props.handleSearchInput()
        }
        this.props.handleFilteredData(filteredData)
    }

    render(){
        return (
            <div>
                <label htmlFor="password">
                <h4><Badge color="dark">Pincode</Badge></h4>
                </label>
                <input type="text" name="deliveryPincode"   onChange={this.handlePinCode}></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="orderDate" onChange={this.handleDate}  ></input>
                <label htmlFor="password">
                <h4><Badge color="dark">Date</Badge></h4>
                </label>
        </div>
        )
    }
}
 

 