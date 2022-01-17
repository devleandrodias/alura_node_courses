import fetch from "node-fetch";

function generateArrayOfUrls(arrayLinks) {
  return arrayLinks.map((x) => Object.values(x).join());
}

async function checkUrlStatus(arrayUrls) {
  try {
    return Promise.all(arrayUrls.map(async (url) => (await fetch(url)).status));
  } catch (error) {
    throw new Error(err.message);
  }
}

export async function validateUrls(arrayLinks) {
  const urls = generateArrayOfUrls(arrayLinks);

  const status = await checkUrlStatus(urls);

  return arrayLinks.map((linkObject, index) => ({
    ...linkObject,
    status: status[index],
  }));
}
