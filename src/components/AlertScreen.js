import React, { useState } from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';

const AlertScreen = ({ msg, display }) => {

    const [showAlert, setShowAlert] = useState(display);
    return (
        <>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="AwesomeAlert"
                message="I have a message for you!"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="No, cancel"
                confirmText="Yes, delete it"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    showAlert(!showAlert);
                }}
                onConfirmPressed={() => {
                    showAlert(!showAlert);
                }}
            />
        </>
    )
}

export default AlertScreen