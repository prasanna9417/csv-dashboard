import React from 'react'
import { Table } from 'reactstrap'

function CSVTable(props){
    return(
        <div>
            <Table striped>
                <thead>
                    <tr>
                        <th>orderId</th>
                        <th>customerId</th>
                        <th>deliveryPincode</th>
                        <th>orderDate</th>
                        <th>items</th>              
                    </tr>
                </thead>
                <tbody>
                    {props.csvdata.map((data)=> {
                        const items=data.items.split(';')
                        items.pop()
                        //console.log(items)
                        return (
                            <tr key = {data.orderId}>
                                <td>{data.orderId}</td>
                                <td> { data.customerId} </td>
                                <td> {data.deliveryPincode}</td>
                                <td>{data.orderDate}</td>
                                <td>
                                    <Table striped>
                                        <tbody>
                                            {items.map((item,index)=> {
                                                return(
                                                    <tr key={index}><td>{item}</td></tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}


export default CSVTable