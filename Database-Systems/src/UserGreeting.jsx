import propTypes from 'prop-types'
function UserGreeting(props){
    if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }else{
        return <h2> Dang nhap di nhok!!!!</h2>
    }    
}
UserGreeting.proptypes ={
    isLoggedIn: propTypes.bool,
    username: propTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting