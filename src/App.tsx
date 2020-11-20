import * as React from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { initialTours, TourType } from "./API";

function App() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [tours, setTours] = React.useState<Array<TourType>>(initialTours);
  const url = "https://course-api.com/react-tours-project";

  const getData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  React.useEffect(() => {
    async function fetchTours() {
      const data = await getData(url);
      setTours(data);
    }

    fetchTours();
    setLoading(false);
  }, []);

  return loading ? <Loading /> : <Tours tours={tours} />;
}

export default App;
