import Button from '@mui/material/Button';

function Card({productName, unitPrice, thumbnail,url}) {
  return (
    <div className='bg-dark-blue dib br3 pa3 ma2 grow tc bw2 shadow-5'>
       <img alt='robots' width='300' src={`${thumbnail}`} />
       <div className='white'>
         <h2>{productName}</h2>
         <p>{unitPrice}</p>
       <br/>
       <br/>
            <Button variant="contained"  href={`${url}`} size="large"  style={{margin: '0 auto'}}>
            ไปเลย...
          </Button>
       </div>
    </div>
  );
}

export default Card;
