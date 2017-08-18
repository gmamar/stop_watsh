import React,{Component} from 'react';
import {connect} from 'react-redux'


class LapList extends Component{


renderList(){

    return this.props.lap.map((lap)=>{
        return(
            <li key ={lap.time}>{lap.time}</li>
        )
        
    })
}

    render(){
        return(
            <ul>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state){

    return{
        lap: state.lap
    }
}

export default connect (mapStateToProps)(LapList);