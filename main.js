let news = [];

const getLatestNews = async () => {
  const url = new URL(`https://wonderful-kitten-813e40.netlify.app/`);
  const response = await fetch(url);
  const data = await response.json();
  news = data.articles;
  console.log("dddd", news);
};

getLatestNews();
