
export const Youtube_Api_Url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_API_KEY}`;
export const Youtube_Search_Api_Url = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
