import { useRouter } from 'next/router';
import React from 'react'

type Props = {}

const partner = (props: Props) => {
    const router = useRouter();
  const { id } = router.query;
  return (
   <div className="">
    <p className="text-center font-[Georgia] text-[36px] font-bold">
      {`${id} `}
        </p>
   </div>
  )
}

export default partner