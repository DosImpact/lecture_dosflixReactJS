import React from "react";
import PostPresenter from "./PostPresenter";
import { tistoryAPI } from "api";

const AC_LS = "access_token";
const BLOGNAME_LS = "blogName";

class PostContainer extends React.Component {
  state = {
    loading: true,
    blogPost: null,
    blogName: "",
    ACToken: ""
  };
  async componentDidMount() {
    const blogName = localStorage.getItem(BLOGNAME_LS);
    const ACToken = localStorage.getItem(AC_LS);

    if (blogName === null || ACToken === null) {
      this.setState({ loading: true });
    } else {
      tistoryAPI.setACTOKEN(ACToken);
      const {
        data: {
          tistory: { item }
        }
      } = await tistoryAPI.getBlogPostList(blogName, 1);
      console.log(item);
      this.setState({ loading: false, blogPost: item, blogName, ACToken });
    }
  }
  render() {
    const { loading, blogName, blogPost } = this.state;
    return (
      <PostPresenter
        loading={loading}
        blogName={blogName}
        blogPost={blogPost}
      ></PostPresenter>
    );
  }
}

export default PostContainer;
