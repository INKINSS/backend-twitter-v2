import needle from "needle";

const BEARER_TOKEN = decodeURIComponent(process.env.BEARER_TOKEN || "");

export const getCurrentTweets = async () => {
  const url = "https://api.twitter.com/2/tweets/search/recent";
  const params = {
    query: "from:twitterdev -is:retweet",
    "tweet.fields": "author_id",
  };

  try {
    const response = await needle("get", url, params, {
      headers: {
        "User-Agent": "v2RecentSearchJS",
        authorization: `Bearer ${BEARER_TOKEN}`,
      },
    });

    if (response.statusCode !== 200) {
      throw new Error(
        `Error en la solicitud: ${response.statusCode} - ${response.statusMessage}`
      );
    }

    return response.body;
  } catch (error) {
    console.error("Error al obtener tweets:", error.message);
    throw error;
  }
};
