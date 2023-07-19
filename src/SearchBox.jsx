/* eslint-disable react/prop-types */

// function SearchBox({ searchChange }) {
//   return (
//     <>
//       <div className="grid justify-items-center">
//         <div>
//           <input
//             className="block w-auto p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             type="text"
//             placeholder="ค้นหาสิ่งที่ต้องการ"
//             onChange={searchChange}
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default SearchBox;

import { useQuery } from "react-query";
import { useState } from "react";
import useDebounce from "../src/hooks/useDebounce";

function SearchResult({ isLoading, data }) {
  return (
    <div
      className="flex flex-col px-4 py-2
        w-full bg-gray-500 divide-y divide-gray-300"
    >
      {isLoading && <div className="text-white">Loading...</div>}
      {data &&
        data.map((item) => (
          <div key={item.id} className="text-gray-100 py-2">
            {item.productName}
          </div>
        ))}
    </div>
  );
}

export default function SearchBox() {
  const [search, setSearch] = useState("");

  const debouncedSearchTerm = useDebounce(search, 200);


  const { data, isLoading, error } = useQuery({
    queryKey: ["cats", debouncedSearchTerm],
    queryFn: () => {
      if (debouncedSearchTerm) {
        return fetch(
          `https://json-web-server.sittichaimarkwi.repl.co/products?productName_like=${debouncedSearchTerm}`
        ).then((res) => res.json());
        
      }
      return { products: [] };
      
    },
    
  });

  console.log(data);
  return (
    <div>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter your search term here"
        className="p-2 w-full focus:outline-none 
        rounded-md bg-gray-600 placeholder:text-gray-500
         text-gray-50 focus:ring focus:ring-purple-500"
      />
     {data?.products.length > 0 && <SearchResult isLoading={isLoading} data={data?.products} />}
    </div>
  );
}
