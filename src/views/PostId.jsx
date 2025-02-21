import { useParams } from "react-router-dom";

const PostId = () => {
    const params = useParams();

    return (<>
        UserId：{params.postId}
    </>);
};

export default PostId;