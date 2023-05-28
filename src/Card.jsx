// eslint-disable-next-line react/prop-types
function Card({ productName, unitPrice, thumbnail, url }) {
  return (
    <>
   
    <div className="max-w-sm bg-teal-200 border border-teal-200 rounded-lg shadow dark:bg-teal-800 dark:border-gray-700 p-1">
        <a href={url}>
          <div className="flex flex-col items-center">
          <img className="rounded-lg h-20" src={`${thumbnail}`} alt="thumbnail" />
          </div>
          
        </a>
        <div className="p-5">
          <a href={url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {productName}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {unitPrice}
          </p>
          <a
            href={url}
            className="flex flex-col items-center  px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
   
     
    </>
  );
}

export default Card;

// { productName, unitPrice, thumbnail, url }

{
  /* <div className="bg-dark-blue dib br3 pa3 ma2 grow tc bw2 shadow-5">
<img alt="robots" width="300" src={`${thumbnail}`} />
<div className="white">
  <h2>{productName}</h2>
  <p>{unitPrice}</p>
  <br />
  <br />
  <Button
    variant="contained"
    href={`${url}`}
    size="large"
    style={{ margin: "0 auto" }}
  >
    ไปเลย...
  </Button>
</div>
</div> */
}
