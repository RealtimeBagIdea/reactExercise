import React, { Component, PropTypes} from 'react';

export class Box extends Component 
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
            boxs.push(<div className="column App-green is-success has-text-centered">
                        Box {i}
                      </div>);
        }

        return (
            <div className="column">
                <div className="select" onChange={this.OnSelectChange}>
                    <select>
                        <option value="1">1 Box</option>
                        <option value="2">2 Boxs</option>
                        <option value="3">3 Boxs</option>
                        <option value="4">4 Boxs</option>
                        <option value="5">5 Boxs</option>
                        <option value="6">6 Boxs</option>
                    </select>
                </div>

                <div className="columns App-body">
                        {boxs}
                </div>
            </div>
        );
    }
}

