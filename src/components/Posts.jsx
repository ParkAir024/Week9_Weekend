import Post from "./post"
import  Container  from "react-bootstrap/Container"
import './posts.css'
export const Posts = () => {

  const posts = [
    {
        "body": "Attack on Titan",
        "id": "3",
        "timestamp": "2024-01-03T00:35:27.568774",
        "user": {
            "email": "parkair@fakey.com",
            "first_name": null,
            "id": "1",
            "last_name": null,
            "username": "preidy"
        }
    },
    {
        "body": "My Hero Academia",
        "id": "4",
        "timestamp": "2024-01-03T00:54:46.188100",
        "user": {
            "email": "parkair@fakey.com",
            "first_name": null,
            "id": "1",
            "last_name": null,
            "username": "preidy"
        }
    },
    {
        "body": "Dragon Ball Z",
        "id": "5",
        "timestamp": "2024-01-03T00:54:49.010977",
        "user": {
            "email": "parkair@fakey.com",
            "first_name": null,
            "id": "1",
            "last_name": null,
            "username": "preidy"
        }
    },
    {
        "body": "Sword Art Online",
        "id": "6",
        "timestamp": "2024-01-03T00:54:50.843257",
        "user": {
            "email": "parkair@fakey.com",
            "first_name": null,
            "id": "1",
            "last_name": null,
            "username": "preidy"
        }
    },
    {
        "body": "Fullmetal Alchemist",
        "id": "7",
        "timestamp": "2024-01-03T00:54:51.00000",
        "user": {
            "email": "parkair@fakey.com",
            "first_name": null,
            "id": "1",
            "last_name": null,
            "username": "preidy"
        }
    }
];


return (
    <Container className="posts-container">
      {posts.length > 0 ? (
        posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })
      ) : (
        <p>No Animes to display</p>
      )}
    </Container>
  );
};