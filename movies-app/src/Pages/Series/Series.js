import axios from "axios";
import React, { useState, useEffect } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import SingleContent from "../../components/SingleContent/SingleContent";
import Genres from "../../components/Genres";
import useGenres from "../../hooks/useGenre";
import { getApi } from "../../utils/getApi";
import { notify } from "../../utils/notify";

const Series = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenres(selectedGenres);

  const fetchSeries = async () => {
    try {
      const { data } = await axios.get(getApi().getSeries(page, genreforURL));

      setContent(data.results);
      setNumOfPages(data.total_pages);
    } catch {
      console.warn(notify('series').failedMessage);
    }
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <div>
      <span className="pageTitle">Series</span>
      <Genres
        type="tv"
        setSelectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              mediaType="tv"
              voteAverage={c.vote_average}
            />
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Series;
