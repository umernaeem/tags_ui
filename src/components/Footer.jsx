import React,{Component} from 'react'

class Footer extends Component
{
    render()
    {
        return(
            <div>
                <section class="pb-0">
                    <div class="container">
                        
                        <footer class="footer">            
                            <p>Copyright <script>document.write(new Date().getFullYear())</script> &copy; Umer Naeem</p>
                        </footer> 
                        
                    </div> 
                </section>
            </div>
        )
    }
}

export default Footer