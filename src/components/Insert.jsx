import React,{Component} from 'react'

import AppURL from '../RestApi/AppURL';
import RestClient from '../RestApi/RestClient';
class Insert extends Component
{
   state = {
        tag_name:'',
        message:''
   }
    
   formSubmit = (e) => {
       e.preventDefault();
       const data = {
        tag_name : this.state.tag_name
       }
       RestClient.PostRequest(AppURL.InsertTagURL,data).then(result=>{
            this.setState({message:result.message});
            
        })

        
   }
    render()
    {
        return(
            <div>
                <div className='container'>
                    <div className='Content'>
                        <h2 className='text-center'>Insert the Tag</h2>
                        <br></br>
                        <div className='row'>
                            <div className='col-md-6 offset-md-3'>
                            <p className='text-center'>{this.state.message}</p>
                            <form class="contact-form col-md-11 col-lg-9 mx-auto" onSubmit={this.formSubmit}>
                                <div class="form-row">
                                    <div class="col form-group">
                                        <input type="text" class="form-control" placeholder="Tag Name" name='tag_name' required onChange={(e)=>{this.setState({tag_name:e.target.value})}} />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input type="submit" class="btn btn-primary btn-block" value="Insert New Tag" />
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Insert