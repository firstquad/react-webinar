import React, {Component} from "react";

export class SummaryActive extends Component {
    render() {
        return (
            <div>Active Users: {this.props.records.filter((record) => record.active).length}</div>
        )
    }
}

export class SummaryUsers extends Component {
    render() {
        return (
            <div>Users Count: {this.props.records.length}</div>
        )
    }
}