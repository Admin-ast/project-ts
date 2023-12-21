import Image from "next/image";

export default function Loading(){
    return (
        <div>
            <Image src={'/assets/img/loading.gif'}
            width={50}
            height={50}
            alt="Loading" />
            </div>
    );
}