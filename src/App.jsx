import Card from "./Card";
// import SearchBox from "./SearchBox";
// import Button from "@mui/material/Button";
import Loading from "./Loading";
import ParticlesBg from "particles-bg";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import useDebounce from "../src/hooks/useDebounce";

export default function App() {
  const [search, setSearch] = useState("");

  const debouncedSearchTerm = useDebounce(search, 200);

  const fetchProducts = async () => {
    if (debouncedSearchTerm) {
      const response = await axios.get(
        import.meta.env.VITE_API_URL + `?productName_like=${debouncedSearchTerm}`
      );
      return response.data;
    }

    const response = await axios.get(
      import.meta.env.VITE_API_URL
    );
    return response.data;
  };
  const { data, isLoading, error, isFetching, isError } = useQuery({
    queryKey: ["cats", debouncedSearchTerm],
    queryFn: fetchProducts,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  ///console.log(data);
  return (
    <div>
      <div className="p-12 w-screen">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ค้นหาข้อมุลที่ต้องการ"
          className="p-2 w-full focus:outline-none 
        rounded-md bg-gray-600 placeholder:text-gray-500
         text-gray-50 focus:ring focus:ring-purple-500"
        />
      </div>

      {data?.length > 0 && (
        <div className="grid justify-items-center">
          {isLoading || (isFetching && <Loading />)}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {data &&
              data?.map((user) => (
                <Card
                  key={user.id}
                  thumbnail={user.thumbnail}
                  unitPrice={user.unitPrice}
                  productName={user.productName}
                  url={user.url}
                />
              ))}
          </div>
        </div>
      )}

      {data?.length === 0 ? (
        <div className="flex justify-center pt-8 gap-3">
          <p> {`ไม่พบสิ่งที่ค้นหา "${search}"`}</p>
        </div>
      ) : (
        <></>
      )}

      <ParticlesBg type="polygon" bg={true} />
    </div>
  );
}
