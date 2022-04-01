import { Chip } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { getApi } from "../utils/getApi";
import { notify } from "../utils/notify";

function Genres({
  type,
  setSelectedGenres,
  selectedGenres,
  genres,
  setGenres,
  setPage,
}) {
  const fetchGenres = async () => {
    try {
      const { data } = await axios.get(getApi().getGenres(type));
      setGenres(data.genres);
    } catch {
      console.warn(notify("genres").failedMessage);
    }
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g.id !== genre.id));
    setGenres([...genres, genre]);
    setPage(1);
  };

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => {
          const { id, name } = genre;
          return (
            <Chip
              key={id}
              label={name}
              style={{ margin: 2 }}
              clickable
              color="primary"
              size={"small"}
              onDelete={() => handleRemove(genre)}
            />
          );
        })}
      {genres.map((genre) => {
        const { id, name } = genre;
        return (
          <Chip
            key={id}
            label={name}
            style={{ margin: 2 }}
            clickable
            size="small"
            onClick={() => handleAdd(genre)}
          />
        );
      })}
    </div>
  );
}

export default Genres;
