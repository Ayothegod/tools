export const fetchData = async () => {
  try {
    const url =
      "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dc6aaa3475msh5e2e59cfbe96317p1af69bjsn1a06ff5c912b",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };
    const data = await fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        return response.hints;
      })
      .catch((e) => console.log(e));

    return data;
  } catch (error) {
    console.log(error);
  }
};
