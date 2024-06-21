import Post from "./Post";
import '../styles/components/StartPage.scss';

function StartPage() {
    return (
        <>
            <div className="posts">
                <Post username="florian_rntg" />
                <Post username="florian_rntg" />
                <Post username="florian_rntg" />
                <Post username="florian_rntg" />
            </div>
        </>
    );
}

export default StartPage;