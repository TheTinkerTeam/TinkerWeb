import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';

import { login } from '../../actions/auth';

const Login = ({ setAlert, login }) => {
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        login(formData);
    }

    return (
        <Fragment>
            <h2>Log In</h2>
            <form onSubmit={e => onSubmit(e)}>
                <input
                    type="text"
                    placeholder="Username or Email"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    required
                />
                <input
                    type="submit"
                    placeholder="Log In"
                    name="submit"
                    value='Login'
                    required
                />
            </form>
        </Fragment>
    )
};

Login.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, { setAlert, login })(Login);