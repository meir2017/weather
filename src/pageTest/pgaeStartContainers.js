


import React ,{Component} from 'react';
import { connect } from 'react-redux'

class Home extends Component{
    render(){
         return (
            <div className="home-page">
       
            </div>
          )

    }
}
const mapStateToProps = state => {
  return {
     }
  }
const mapDispatchToProps= dispatch=>{
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);