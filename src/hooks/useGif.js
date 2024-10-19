import React from "react";
import axios from "axios";
import  { useState } from "react";
import { useEffect } from "react";

const API_KEY = FGJ5I2B9O4LPZRcLZYroLR5SU3arO2Xy;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
  const [gif, setGif] = useState("");

  const [loading, setLoading] = useState("false");

  async function fetchData(tag) {
    setLoading(true);

    const { data } = await axios.get(tag ? `${url}&tag=${tag}` : url);

    const imageSource = data.data.images.downsized_large.url;

    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return {gif, loading, fetchData};
};

export default useGif;
