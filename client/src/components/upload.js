import React from "react";
import axios from '../config/axios'
import objFormat from '../config/objectFormat'
import _ from 'lodash'

export default class Upload extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            myFile:null,
            error:'',
            data:''
           
        }
    }

    handleSubmit= e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('myFile',this.state.myFile)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("/upload",formData,config)
            .then((response) => {
              console.log(response)
              const csvdata=response.data
              this.handleDataValidation(csvdata)
            })
            .catch((err) => {
                console.log(err)
           });
      }

      handleDataValidation=(csvdata)=>{
        console.log('data val')
        const sampleData = csvdata[0]
        const objKeys=Object.keys(csvdata[0])
        if(objKeys.sort().toString()==objFormat.sort().toString()){
            if(sampleData.items.split(';')){
                this.props.handleData(csvdata)
            }
            else{
                this.setState({error:'this format is not supported'})
            }
        }
        else{
            this.setState({error:'this format is not supported'})
        }
      }
    
    handleChange=e=>{
        if(!e.target.files[0]){
            this.setState({error:'no file selected'})
        }
        else if(e.target.files[0].name.split('.').pop()!='csv'){
            this.setState({error:'only csv file is allowed'})
        }
        else{
            this.setState({myFile:e.target.files[0]},()=>{
              this.setState({error:''})
              //console.log('file selected')
            })
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="myFile" onChange= {this.handleChange}/>
                    <button type="submit">Submit</button>
                    {this.state.error.length > 0 && <span><h6 style={{ color: 'red' }}>{this.state.error}</h6></span>}
                </form>
            </div>
        )
    }
}

 

 