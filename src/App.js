import React, {Component} from 'react';
export default class App extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return <p>This is Funnel React  {this.props.name1} {this.props.name2} </p>
    }
}