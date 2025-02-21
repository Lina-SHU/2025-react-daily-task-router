import { Outlet } from "react-router-dom";

const Post = () => {
    return (<>
        <p>Post 頁面</p>
        <Outlet />
    </>);
};

export default Post;