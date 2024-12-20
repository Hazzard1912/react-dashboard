import { useEffect, useState } from "react"
import { MainLayout } from "./layouts/MainLayout"
import { DataTable, Filter, Loader } from "./components/components"

export const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterState, setFilterState] = useState<string>("Todas");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();

      setTimeout(() => {
        setData(data);
        setLoading(false);
      }, 1500);

    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      {loading ? <Loader /> :
        <>
          <Filter filterState={filterState} setFilterState={setFilterState} />
          <DataTable data={data} filterState={filterState} />
        </>
      }
    </MainLayout>
  )
}
