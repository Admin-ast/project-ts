import { getFetcher } from '@/service'
import React, { useEffect } from 'react'

function cookiestest() {

    useEffect(() => {
        const setcookie = async() => {
            const cookie = await getFetcher("/user/cookietest");

            console.log(cookie);
        }

        setcookie();
    }, []);
  return (
    <div>cookiestest</div>
  )
}

export default cookiestest