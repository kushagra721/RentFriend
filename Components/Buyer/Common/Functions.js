const BaseUrl = "https://companio.onrender.com/companio"

const CallApi = async (url,body) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Parse response JSON
    const data = await response.json();

   

    return data; // Return response data
  } catch (error) {
    console.error("Error sending OTP:", error.message);
    return { error: error.message };
  }
};

export { CallApi, BaseUrl };
