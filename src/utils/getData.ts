interface IFetchOptions {
  method: "GET" | "POST" | "PUT" | "DELETE";
}

interface IProps {
  url: string;
  options: IFetchOptions;
}

export async function getData<T>({ url, options }: IProps): Promise<T> {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    options
  )
    .then((res) => res.json())
    .then((response) => {
      return Array.from({ length: 20 }, () => response) as T;
    })
    .catch((error) => {
      console.error("Error en la solicitud fetch:", error);
      throw error;
    });

  return response;
}
