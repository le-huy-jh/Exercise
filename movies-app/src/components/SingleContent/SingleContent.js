import { Badge } from "@material-ui/core";
import React from "react";
import { img300, unavailable } from "../../config/config";
import ContentModal from "../ContentModal/ContentModal";
import "./SingleContent.css";

function SingleContent({ id, poster, title, date, mediaType, voteAverage }) {
  return (
    <ContentModal mediaType={mediaType} id={id}>
      <Badge
        badgeContent={voteAverage}
        color={voteAverage > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img300}/${poster}` : unavailable}
        alt="title"
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        <span>{mediaType === "tv" ? "TV series" : "Movie"}</span>
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
}

export default SingleContent;
