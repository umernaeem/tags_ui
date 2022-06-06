import React,{Component} from 'react'
import {
    BrowserRouter as Router,useParams,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home';
import Insert from './Insert';
import Edit from './Edit';
import NoMatch from './NoMatch';

class Header extends Component
{
    render()
    {
        return(
            
            <div>
                <nav id="scrollspy" class="navbar page-navbar navbar-light navbar-expand-md fixed-top" data-spy="affix" data-offset-top="20">
                    <div class="container">
                        <Link class="navbar-brand" to="/"><strong class="text-primary">Creative</strong> <span class="text-dark">Design</span></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/insert">Insert</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="insert" element={<Insert />} />
                    <Route path="tagEdit/:editId" element={<Edit />} />
                        
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>


        )
    }
}

export default Header