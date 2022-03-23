export default async function fetchCj() {
  try {
    const API_ENDPOINT = "https://link-search.api.cj.com/v2/link-search";
    const TOKEN = "5nw1mv627qq58s035bc85k574a";
    const WEBSITE_ID = 7928723;
    const ADVERTISER_IDS = 21730313;

    const response = await fetch(`${API_ENDPOINT}?website-id=${WEBSITE_ID}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    });

    if (!response.ok) {
      throw new Error("HTTP ERROR Status:" + response.status);
    }

    const data = await response.json();

    console.log(data);
  } catch (e) {
    throw new Error("fetch ERROR message: " + e.message);
  }
}
