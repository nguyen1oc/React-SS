import profilePic from './assets/logo.png'
function Card(){

    return(
        <div className="Card">
                <img className="card-image" src={profilePic} alt="profile picture"></img>
                <h2 className="card-name">Nguyen Loc</h2>
                <p className="card-p">Toi hoc bach khoa va dep trai</p>
        </div>
    );
}
export default Card