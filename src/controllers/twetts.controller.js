export const getCurrentTweets = async () => {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
    };
    const response = await fetch(
      "https://api.twitter.com/2/tweets/search/recent?max_results=10&query=javascript",
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error al obtener tweets:", error.message);
    throw error;
  }
};
