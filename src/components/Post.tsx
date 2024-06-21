import { FaHeart, FaRegComment, FaRegHeart } from 'react-icons/fa';
import '../styles/components/Post.scss';
import GoldCheck from './checkmarks/GoldCheck';
import { useState } from 'react';

interface PostProperties {
    username: string;
    pp?: string;
}

function Post({ username, pp = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_HeSzHfBorKS4muw4IIeVvvRgnhyO8Gn8w&s" }: PostProperties) {
    const [liked, setLiked] = useState(false);

    return (
        <>
            <div className="post">
                <div className="container">
                    <div className="userinfo">
                        <img src={pp} alt={`${username}'s profile picture`} className="post-pp" /><span className="post-username">{username}</span><GoldCheck />
                    </div>
                    <img src="https://www.lindenhof-metzger.de/images/product_images/original_images/Fleischkaese1.jpg" alt="Post" className="media" />
                    <div className="interactions">{liked ? <FaHeart color='red' onClick={() => { setLiked(false) }} /> : <FaRegHeart onClick={() => { setLiked(true) }} />}<FaRegComment /></div>
                    <div className="description">A Leberkas a day keeps the doctor away :3</div>
                </div>
            </div>
        </>
    )
}

export default Post;