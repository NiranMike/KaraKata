import React from 'react'
import RotateLoader from "react-spinners/RotateLoader";

const Loader = () => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };
  return (
    <div className="h-screen flex justify-center items-center mx-auto my-auto w-screen">
          <RotateLoader
            color={'black'}
            loading={true}
            cssOverride={override}
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
            />
    </div>
        
    
  )
}

export default Loader