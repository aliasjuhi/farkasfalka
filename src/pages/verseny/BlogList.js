import { Link } from 'react-router-dom';
import Typography  from '@mui/material/Typography';





const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Typography variant="h4" color='error' >Jelentkezet: { blog.author }</Typography>
          <Link to={`/quads/${blog.id}`}>
          <Typography variant="h4" color='#FFF' >{ blog.firstName }</Typography>
            
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;