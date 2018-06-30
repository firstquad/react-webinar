require("./user-details1.css");
import React, {Component} from "react";

export class UserDetailsComponent extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            detailsRecords: []
        }
    }

    componentDidMount() {
        this.refs.filterInput && this.refs.filterInput.focus();
        this.setState({
            user: user,
            detailsRecords: detailsRecords
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">

                                    <div>{detailsRecords
                                        .filter((record) => {
                                            return this.props.params.id == record.id;
                                        }).map((user, index) => {
                                            return <p key={index}>{user.name}</p>
                                        })}
                                    </div>

                                    <h2>{user.name}</h2>
                                    <p>id: {this.props.params.id}</p>ы
                                    <p>
                                        <strong>About: </strong> {user.prof}
                                    </p>
                                    <p><strong>Hobbies: </strong>
                                        {user.hobbies.map((record, index, array) =>
                                            index === array.length - 1 ? record : record + ", ")}
                                    </p>
                                    <p><strong>Skills: </strong>
                                        {user.skills.map((record, index) => {
                                            return <span key={index} className="tags">{record}</span>
                                        })}
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img src="http://via.placeholder.com/250x250" alt=""
                                             className="img-circle img-responsive"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

var user = {
    name: "Nicole Pearson",
    prof: "Web Designer / UI",
    hobbies: ["Read", "out with friends", "listen to music"],
    skills: ["html5", "css3", "react"]
}

const detailsRecords = [{
    id: 1,
    name: "John Doe",
    about: "Nice guy",
    hobby: "Likes drinking wine", skills: ["html", "javascript", "redux"]
}, {
    id: 2,
    name: "Mary Moe",
    about: "Cute girl",
    hobby: "Likes playing xbox whole days long", skills: ["Fortran", "Lua", "R#"]
}];