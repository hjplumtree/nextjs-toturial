export async function fetchCjAdvertisers() {
  let parseString = require("xml2js").parseString;

  try {
    const response = await fetch("/cj-advertiser", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        // Accept: "application/xml",
      },
    });

    if (!response.ok) {
      throw new Error("HTTP ERROR Status: " + response.status);
    }

    const xml = await response.text();
    const advertisers = parseString(xml, (err, result) => {
      return result["cj-api"].advertisers[0];
    });
    console.log(advertisers);
    return advertisers;
  } catch (e) {
    throw new Error("fetch ERROR message: " + e.message);
  }
}

export async function fetchCjOffers() {
  let parseString = require("xml2js").parseString;

  try {
    const response = await fetch("/cj-offers", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        // Accept: "application/xml",
      },
    });

    if (!response.ok) {
      throw new Error("HTTP ERROR Status:" + response.status);
    }

    const xml = await response.text();
    parseString(xml, (err, result) => {
      console.log(result["cj-api"].links[0]);
    });
  } catch (e) {
    throw new Error("fetch ERROR message: " + e.message);
  }
}
