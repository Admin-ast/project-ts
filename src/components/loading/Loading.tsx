import React from 'react'
import Image from 'next/image';
function Loading() {
  return (
    <div>
      <Image 
                    src="/assets/img/loading.gif"
                    width={50}
                    height={50}
                    alt="Loading.."
                    className="text-center mx-auto"
                    >

                    </Image>
    </div>
  )
}

export default Loading