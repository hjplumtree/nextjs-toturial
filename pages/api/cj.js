export default async function fetchCj() {
  var parseString = require("xml2js").parseString;

  try {
    const response = await fetch("/cj", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        Accept: "application/xml",
      },
    });

    if (!response.ok) {
      throw new Error("HTTP ERROR Status:" + response.status);
    }

    const xml = await response.text();
    parseString(xml, (err, result) => {
      console.log(result["cj-api"].links[0].link);
    });
  } catch (e) {
    throw new Error("fetch ERROR message: " + e.message);
  }
}
