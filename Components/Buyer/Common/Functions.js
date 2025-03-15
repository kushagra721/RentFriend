const BaseUrl = "https://companio.onrender.com"

const CallApi = async (url, body, method) => {
  console.log("url",url)
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Only include body if method is not GET
    if (method !== "GET") {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error calling API:", error.message);
    return { error: error.message };
  }
};


export { CallApi, BaseUrl };
