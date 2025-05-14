
import PropTypes from "prop-types"

function UserGreeting({name=''}){
    //storing the messages
    const welcomeMessage = <h2 className="welcome-message">Welcome {name} to my landing page!</h2>;

    return welcomeMessage;
}

UserGreeting.PropTypes={
    name: PropTypes.string
}

export default UserGreeting