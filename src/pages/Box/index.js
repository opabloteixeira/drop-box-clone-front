import React, { Component } from 'react';
import api from "../../services/api";
import { MdInsertDriveFile } from 'react-icons/md';
import logo from '../../assets/logo.png';
import "./styles.css";


export default class Box extends Component {
    async componentDidMount(){
        const box = this.props.match.params.id;
        const response = await api.get(` boxes/${box} `)
    }
    render() {
        return (
            <div className="box-container">
                <header>
                    <img className="logo" src={logo} alt="logo"/>
                    <h1>Box Teste</h1>
                </header>

                <ul>
                    <li>
                        <a className="fileInfo" href="/teste">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>desafio.pdf</strong>
                        </a>
                        <span>há 3 minuts atrás</span>
                    </li>
                    <li>
                        <a className="fileInfo" href="/teste">
                            <MdInsertDriveFile size={24} color="#A5Cfff" />
                            <strong>desafio.pdf</strong>
                        </a>
                        <span>há 3 minuts atrás</span>
                    </li>
                </ul>
            </div>
        );
    }
}
