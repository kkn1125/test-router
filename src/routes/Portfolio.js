import React, { Fragment, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import Template from "../components/Template";

function Portfolio() {
  const { title } = useParams();
  const [post, setPost] = useState("");

  if (title) {
    import("../projects/" + title).then((res) => setPost(res.default));
  }

  return (
    <div>
      {!title && <ProjectList />}
      {title && (
        <Fragment>
          <Template
            title={title}
            content={post}
            author='ohoraming'
            createAt={Date.now()}
            tags={[
              {
                name: "project",
              },
            ]}
          />
          <Link to='/portfolio'>프로젝트 목록</Link>
        </Fragment>
      )}
    </div>
  );
}

export default Portfolio;
