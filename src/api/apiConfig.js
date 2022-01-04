const apiConfig = {
  // alamat api
  baseUrl: "https://api.themoviedb.org/3/",
  // kunci api
  apiKey: "4032a0323e86ffc3f08418a4b85608e3",
  // alamat mengambil gambar original
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  // alamat mengambil gambar w500
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
