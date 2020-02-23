import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {
    if (alerts && alerts.length > 0) {
        return alerts.map(alert => {
            return (
                <div
                    key={alert.id}
                    className={`${alert.type}`}
                >
                    {alert.msg}
                </div>
            );
        });
    } else {
        return (
            <div></div>
        )
    }
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alert
})

export default connect(mapStateToProps, null)(Alert);