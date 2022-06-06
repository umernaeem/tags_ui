import React,{Component} from 'react'
import {
    BrowserRouter as Router,useParams,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import AppURL from '../RestApi/AppURL';
import RestClient from '../RestApi/RestClient';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Home extends Component
{
    
    constructor()
    {
        super();
        this.state = {
            tags_data:[],
            deleteMessage:''
        };
    }
    componentDidMount(){
        RestClient.GetRequest(AppURL.AllTagsURL).then(result=>{
            this.setState({tags_data:result});
            console.log(this.state.tags_data);
        })
    }
    OnDeleteClick = (e) =>{
        e.preventDefault();
        let tag_val = e.target.value;
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    RestClient.DeleteRequest(AppURL.DeleteTagURL+'/'+tag_val).then(result=>{
                        this.setState({deleteMessage:result.message});
                        RestClient.GetRequest(AppURL.AllTagsURL).then(result=>{
                            this.setState({tags_data:result});
                            console.log(this.state.tags_data);
                        })
                    })
                }
              },
              {
                label: 'No',
                
              }
            ]
          });
    }
    render()
    {
        const MyList = this.state.tags_data;
        const MyView = MyList.map(MyList=>{
          
        return <div className='col-md-3 tag_item'>
                <h4>{MyList.tag_name}</h4>
                <Link to={'/tagEdit/'+MyList.id} className="btn btn-xs btn-info">Edit</Link>
                <button to={'/Delete/'+MyList.id} className="btn btn-xs btn-danger" value={MyList.id} onClick={this.OnDeleteClick}>Delete</button>
            </div> 

        });

        return(
            <div>
                
                <div className='container'>
                    <div className='Content'>
                        <h2 className='text-center'>All Tags</h2>
                        <br></br>
                        <p>{this.state.deleteMessage}</p>
                        <div className='row'>
                            {MyView}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home


