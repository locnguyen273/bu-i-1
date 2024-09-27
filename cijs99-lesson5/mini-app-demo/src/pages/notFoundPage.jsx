import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found Page 404</h1>
      <Link className="btn btn-primary" to={"/"}> Go To Home Page</Link>
    </div>
  )
}

export default NotFoundPage