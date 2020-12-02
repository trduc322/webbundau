import React, {Component} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './DayPicker.css';

class DayPicker extends Component{
    state = {
        date: new Date()
    }

    onChange = date =>{
        this.setState({
            date
        })
    }
    render(){
        return(
            <div className="calendar-style">
                <Calendar onChange={this.onChange}/>
                <p> Ngày chọn : {this.state.date.toLocaleDateString()}</p>
            </div>
        )
    }
}
export default DayPicker;