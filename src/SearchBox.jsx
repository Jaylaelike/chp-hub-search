/* eslint-disable react/prop-types */

function SearchBox({ searchChange }) {
  return (
    <>
      <div className="grid justify-items-center">
        <div>
          <input
            className="block w-auto p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            placeholder="ค้นหาสิ่งที่ต้องการ"
            onChange={searchChange}
          />
        </div>
      </div>
    </>
  );
}

export default SearchBox;
