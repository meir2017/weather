import React, { Component } from 'react'
import Switch from '@material-ui/core/Switch';

 class SwitchPageComponent extends Component {
    constructor(props) {
		super(props);
		this.state = {
      checkedA: true,
    };
    
	}
    handleChangeSwitch = name => event => {
      debugger
        this.setState({ checkedA:!this.state.checkedA });
        this.props.FarenheitOrCelsius()
      };
      
    render() {
        return (
            <div>
            F
            <Switch
            checked={this.state.checkedA}
            onChange={this.handleChangeSwitch('checkedA')}
            value="checkedB"
            color="primary"
          />
          C
          </div>
        )
    }
}
export default SwitchPageComponent



