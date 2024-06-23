import Post from "./Post";
import '../styles/components/StartPage.scss';

function StartPage() {
    return (
        <>
            <div className="posts">
                <Post username="florian_rntg" type="3d" />
                <Post username="florian_rntg" type="image" />
                <Post username="florian_rntg" type="image" />
                <Post username="florian_rntg" type="image" />
            </div>
        </>
    );
}

export default StartPage;