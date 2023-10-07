import BlogContextDemo from './BlogContextDemo'
import React from 'react';

const blogInfo={
    React:{
        post:"Learn useContext Hooks",
        author:"Varun K"
    },
    NodeJS:{
        post:"Node Commands",
        author:"Veena M"
    }
  };
  
  export const BlogContext = React.createContext(blogInfo);
  
  function Demo() {
    return (
      
      <div>
        <h1>useContext() Demo</h1>
        <BlogContext.Provider value={blogInfo}>
          <BlogContextDemo/>
        </BlogContext.Provider>
      </div>
    );
  }
  export default Demo;