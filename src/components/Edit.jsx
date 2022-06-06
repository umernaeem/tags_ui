import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import AppURL from '../RestApi/AppURL';
import RestClient from '../RestApi/RestClient';
import '../index.css';

function Edit() {
    const [message, setMessage] = useState("");
    const [tag_name, setTagName] = useState("");
    const [loadOnce, setloadOnce] = useState(0);
    let { editId } = useParams();
  // Similar to componentDidMount and componentDidUpdate:

    
    useEffect(() => {
        if(loadOnce==0)
        {
                RestClient.GetRequest(AppURL.AllTagsURL+"/"+editId).then(result=>{
                setTagName(result.tag.tag_name);
                    console.log(result);
                })
                setloadOnce(1);
        }
        
    });
    const formSubmit = (event) => {
        event.preventDefault();
        const data = {
            tag_name : tag_name
        }

        RestClient.PostRequest(AppURL.UpdateTagURL+'/'+editId,data).then(result=>{
            setMessage(result.message);
            
        })
      }

  return (
    <div>
      <div className='container'>
        <div className='Content'>
            <h2 className='text-center'>Edit the Tag</h2>
            <br></br>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                <p className='text-center'>{message}</p>
                <form class="contact-form col-md-11 col-lg-9 mx-auto" onSubmit={formSubmit}>
                    <div class="form-row">
                        <div class="col form-group">
                            <input type="text" class="form-control" value={ tag_name } placeholder="Tag Name" name='tag_name' required onChange={(e)=> { setTagName(e.target.value)}} />
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary btn-block" value="Edit Tag" />
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Edit;