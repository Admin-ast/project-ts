const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getFetcher = async (
  url: string,
  body: BodyInit | null | undefined
) => {
  console.log("heya", body);
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
};
