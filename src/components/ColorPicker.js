import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors: ['#6610f2', '#dc3545', '#28a745', '#007bff', '#ccc']
        };
    }
    showColor(color){
        // console.log(this.props.color);
        return{
            backgroundColor:color   
        } 
    }
    activeColor(color){
        this.props.onRecieveColor(color);
    }
    render() {
        var color = this.state.colors.map((color, index) =>{
            return <span 
                key={index} 
                style = {this.showColor(color)}
                className ={this.props.color === color ? 'active' : ''}
                onClick ={()=> this.activeColor(color)}
                // className = 'active'
            ></span>
        });
        return (
            <div className="col-md-6 col-sm-12 mb-4">
                <div className="card border-primary">
                    <div className="card-header bg-primary text-white">Color Picker</div>
                    <div className="card-body-md-12">
                        {color}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
