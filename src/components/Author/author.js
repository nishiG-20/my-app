import React from "react";
import { client } from "../../client";
import "./author.css";

const Author = () => {
  const [authorData, setAuthorData] = React.useState();
  React.useEffect(() => {
    (async () => {
      let res = await client.getEntries({
        content_type: "author",
      });
      setAuthorData(res.items);
    })();
  }, []);
  return (
    authorData &&
    authorData.map((elem, index) => {
      let { fields } = elem;
      let { title, description, avatar } = fields;
      return (
        <>
          <div class="card" key={index}>
            <h3 style={{ color: "red" }}>
              {title} ({description})
            </h3>
            <img
              style={{ height: "100px" }}
              src={"https:" + avatar.fields.file.url}
            />
            <div class="container">
              <h4>
                <b>{avatar.fields.title}</b>
              </h4>
              <p>{avatar.fields.description}</p>
              <br />
            </div>
          </div>
        </>
      );
    })
  );
};

export default Author;
