// src/components/Card.js

import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function BlogpostCard({ blogpost, timeIndex }) {
  return (
    <div
      className={"card " + styles.blogpost_card}
      style={{ marginBottom: "var(--ifm-spacing-lg)" }}
    >
   
      <Link href={blogpost.url}>
        <div className="container">
          <div
            className={
              "row" +
              " " +
              "flex-full-centered" +
              " " +
              "padding-none" +
              " " +
              "margin-none"
            }
          ></div>

          <div className="flex-full-centered" style = {{height: "180px"}}>
            <div className={styles.blogpost_image}>
              <img
                src={useBaseUrl(blogpost.image)}
                id={blogpost.imageID}
                width={blogpost.imageRenderedWidth}
                height={blogpost.imageRenderedHeight}
                alt={"Illustration for the blog post"}
              />
            </div>
          </div>

          <div className={styles.blogpost_header}>{blogpost.title}</div>

          <div className={styles.blogpost_summary}>
            {blogpost.summary.length < 200
              ? blogpost.summary
              : blogpost.summary.substring(0, 200) + "..."}
          </div>

          <div
            className="row"
            style={{ marginBottom: "var(--ifm-spacing-md)" }}
          >
            <div className="col" style={{ padding: "0px" }}>
              <div className={styles.blogpost_date}>{blogpost.date}</div>
              <div className={styles.blogpost_authors}>{blogpost.authors}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
