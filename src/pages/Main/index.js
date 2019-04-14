import React, {Component} from 'react';
import api from "../../services/api";
import logo from "../../assets/logo.png";

import "./styles.css";

export default class Main extends Component {

    state = {
        newBox: ""
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post("boxes", {
            title: this.state.newBox,
        });


        this.props.history.push(`/box/${response.data._id}`);
        console.log(response.data);
    }


    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value});
    }


    render(){
        return(
            <div className="main-container">
                <form onSubmit={this.handleSubmit} className="form">
                    <img className="logo" src={logo} alt="logo" />
                    <input 
                        className="text-input" 
                        placeholder="Criar um box"
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    />
                    <button className="button" type="submit">Criar</button>
                </form>
            </div>
        );
    }
}