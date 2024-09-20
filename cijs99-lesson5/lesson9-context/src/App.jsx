import { PostContext, PostProvider } from "./contexts/postContext";
import Spinner from "./components/spinner";
import PostList from "./components/postList";
import PostListItem from "./components/postListItem";

function App() {
  return (
    <div className="container">
      <h3 className="text-center my-5">Demo Context & Call API By Fetch</h3>
      <PostProvider>
        <PostContext.Consumer>
          {({ isLoading, posts, handleDeleteById }) => {
            return isLoading ? (
              <Spinner />
            ) : (
              <PostList>
                {posts.map((post) => {
                  return (
                  <PostListItem 
                    key={post.id} 
                    {...post} 
                    handleDeleteClicked={handleDeleteById}
                  />
                );
                })}
              </PostList>
            );
          }}
        </PostContext.Consumer>
      </PostProvider>
    </div>
  );
}

export default App;
