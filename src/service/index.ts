const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const postFetcher = async (
  url: string,
  body: BodyInit | null | undefined
) => {
  try {
    const result = await fetch(`${baseUrl}${url}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body,
    });
    const response = await result.json();
    return response;
  } catch (err) {
    return err;
  }
};

export const getFetcher = async (url: string) => {
  try {
    const result = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = await result.json();
    return response;
  } catch (err) {
    return err;
  }
};
