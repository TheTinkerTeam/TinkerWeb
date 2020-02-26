import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Message, Transition } from "semantic-ui-react";

const Alert = ({ alerts }) => {
  const initialState = {
    id: null,
    visible: true
  };
  const [state, setVisible] = useState(initialState);
  useEffect(() => {
    if (alerts[0] && alerts[alerts.length - 1].id !== state.id) {
      setVisible({ id: alerts[alerts.length - 1].id, visible: !state.visible });
    }
  }, [alerts]);

  if (alerts && alerts.length > 0) {
    return alerts.map(alert => {
      return (
        <Transition
          visible={state.visible}
          animation="flash"
          key={alert.id}
          duration="300"
        >
          <Message
            size="massive"
            error={alert.type === "error"}
            warning={alert.type === "warning"}
            positive={alert.type === "positive"}
            info={alert.type === "info"}
            key={alert.id}
            header={alert.msg}
          />
        </Transition>
      );
    });
  } else {
    return <div></div>;
  }
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alerts
});

export default connect(mapStateToProps, null)(Alert);
