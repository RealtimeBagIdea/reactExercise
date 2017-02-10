import React, { Component } from 'react';
import './App.css';
import './bulma.css'
import {Box} from './Box.js'

class App extends Component 
{
    state = 
    {
        count: 1
    }

    OnSelectChange = (e) => 
    {
        this.setState({count: parseInt(e.target.value)});      
    }

    render() 
    {
        var boxs = [];
        for (var i = 1; i <= this.state.count; i++) 
        {
            boxs.push(<Box />);
        }

        return (

            <div className="App">
                <div className="App-header">
                    <div className="select" onChange={this.OnSelectChange}>
                        <select>
                            <option value="1">1 Column</option>
                            <option value="2">2 Columns</option>
                            <option value="3">3 Columns</option>
                            <option value="4">4 Columns</option>
                            <option value="5">5 Columns</option>
                            <option value="6">6 Columns</option>
                        </select>
                    </div>
                </div>

                <div className="columns App-body">
                        {boxs}
                </div>
            </div>
        );
    }
}

export default App;
