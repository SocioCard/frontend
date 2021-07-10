import React from "react";
import ReactDOM from "react-dom";
import { GuardSpinner } from "react-spinners-kit";

export default class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    render() {
        const { loading } = this.state;
        return(
            <div style={{minHeight:'100vh', justifyContent:'center',alignItems:'center'}}>
                <div style={{
                    display: 'inlineBlock',
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: '70px',
                    height: '70px',
                    margin: 'auto',
                }}>
                <GuardSpinner size={70} color="#686769" loading={loading} />
                </div>
            </div>
        )
    }
}

