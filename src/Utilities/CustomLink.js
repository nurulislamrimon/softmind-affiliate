import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ background: match ? "#696766" : "none", color: match ? "white" : "black" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
}

export default CustomLink;