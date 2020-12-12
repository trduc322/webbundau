import React, {Component} from 'react';
import Calendar from 'react-calendar'

class Calendar1 extends Component{
    state = {
        date: new Date()
    }
    render(){
        return(
            <div style = {{boxShadow: "5px 5px 25px"}}>
                <Calendar/>
            </div>
        )
    }
}
export default Calendar1;