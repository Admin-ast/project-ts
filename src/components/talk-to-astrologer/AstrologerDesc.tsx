import Image from "next/image";
import React, { useEffect, useState } from "react";
import Section from "../Section";
import ThreeDots from "./ThreeDots";
import Rating from "./Rating";
import { getFetcher, postFetcher } from "@/service";
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../contexts/AuthProvider";
import Link from "next/link";
import { useCart } from "../shop/context/ShopContext";

type Props = {
  detail: {
    _id: string,
    name: string;
    status:string;
    chatStatus:string;
    callStatus:string;
    chatWaitTime:number;
    callWaitTime:number;
    callCharges: number;
    image: string;
    expertise: string;
    experience: number;
    ratings: number;
    orders: number;
    callmin: number;
    chatmin: number;
    chatCharges:number;
    isPremium: Boolean;
    skillDetails: {
      allSkills: any,
      languages: any,
      dob: string,
      experience: string,
      gender: string,
      hours: number
    };
  },
  waitTime: string;
  walletbalance:number;
};
const AstrologersList = [
  {
    id: 1,
    src: "/assets/admin/Dashboard_image.png",
    speciality: "Vedic, Face Reading",
    name: "Bani Sharma",
    language: "Hindi",
    experience: "10 years",
    price: 10,
    chatTime: "50k min",
    callTime: "50k min",
  },
];

const AstrologerDesc = ({ detail, waitTime, walletbalance }: Props) => {
  const [follow, setFollow] = useState('Follow');
  const { isuserLogged } = useAuth();
  const { isOpen, setIsOpen } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [chatcharges, setChatcharges] = useState(0);
  const [astrologername, setAstrologername] = useState('');
  const [chatmessage, setChatmessage] = useState('');
  const [callmessage, setCallmessage] = useState('');

  let minChatbalance = detail?.chatCharges * 5;
  let minCallbalance = detail?.callCharges * 5;

  const handleClick = async (id: string) => {


    if (isuserLogged) {
      const sendfollow = { astrologer: id, follow: follow };
      const following = JSON.stringify(sendfollow);

      const send = await postFetcher("/follower/add", following);
      if (send?.status) {
        if (follow === 'Follow') {
          setFollow('Following');
          toast.success('Successfully Follwing');
        }
        else {
          setFollow('Follow');
          toast.success('Successflly Unfollowing');
        }
      }
    }
    else {
        setIsOpen(true);
    }
  }

  useEffect(() => {
    if(isuserLogged){
      console.log("astrologerid" + detail?._id);
      console.log("getfollow");
       const getfollow = async() => {
          const userfollow = await getFetcher('/follower/checkfollow/' + detail?._id);


       }

       getfollow();
    }
  },[]);
  return (
    <div className="mt-[30px] bg-[url('/assets/horoscope-bg.webp')] ">
      <Section>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                   Minimum balance of 5 miniutes ( Rs. { 5 * chatcharges} ) 
                  </p>
                  <p>
                    is required to start chat with {astrologername}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <Link href="/talk-to-astrologer/price" className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  Recharge
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        <div className="relative items-center justify-center  rounded-[15px] border-[1px] border-[#DC6563] bg-white py-8 md:flex">

          <div className="gap-[91px] px-8 lg:flex ">
            <div className=" mt-[53px] ">
              <Image
                src={"/assets/profile" + detail?.image}
                alt={detail?.name}
                width={294}
                height={294}
              />
              <div className="mt-[34px] flex h-[58px]  justify-center ">
                <button className="rounded-[10px] bg-gradient-to-b from-[#FF7646] to-[#FF0600] px-8 font-[Roboto] text-[28px] font-bold text-white lg:px-16" onClick={() => handleClick(detail?._id)}>
                  {follow}
                </button>
              </div>
            </div>
            <div className=" mt-[53px]">
              <p className="font-[Georgia] text-[36px] font-bold">
                {detail.name}
              </p>
              <p className="font-[Roboto] text-[24px] ">{detail?.skillDetails?.allSkills.map((skill: any) =>
                skill?.value + ", "
              )}</p>
              <p className="font-[Roboto] text-[24px] ">{detail?.skillDetails?.languages.map((language: any) =>
                language?.value + ", "
              )}</p>
              <p className="font-[Roboto] text-[24px] ">
                Exp:{detail?.skillDetails?.experience}  {detail?.skillDetails?.experience.length === 1 ? "year" : "years"}
              </p>
              <p className="font-[Roboto] text-[24px] ">₹ :{detail?.callCharges}</p>
              <div className="mt-[76px] grid gap-[34px] md:flex lg:flex ">
                <div className="flex items-center">
                  <Image
                    src="/assets/talk-to-astrologer/chat.png"
                    alt="chat"
                    width={60}
                    height={60}
                  />
                  <p className="font-[Roboto] text-[24px] font-bold">
                    {detail?.chatmin ? detail?.chatmin : " 0 " + " mins"}
                  </p>
                </div>
                <div className="">
                  <div className="flex items-center">
                    <Image
                      src="/assets/talk-to-astrologer/call.png"
                      alt="chat"
                      width={60}
                      height={60}
                    />
                    <p className="font-[Roboto] text-[24px] font-bold">
                      {detail?.callmin ? detail?.callmin : " 0 " + " mins"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-[76px] gap-[34px] md:flex lg:flex">
                {isuserLogged ?
                <div>
                  {walletbalance > minChatbalance ?
                  <Link href={"/chat/chat?id=" + detail?._id}>
                    <div className="flex  items-center gap-[48px] rounded-[10px] border-[1px] border-[#DC6563] px-4">
                      <Image
                        src="/assets/talk-to-astrologer/chat.png"
                        alt="chat"
                        width={33}
                        height={33}
                      />

                      <div className="">
                        <p className="font-[Roboto] text-[24px] font-bold p-1">
                          Start Chat
                        </p>
                        {detail?.chatStatus === "Online" ? detail?.chatWaitTime > 0
                        ?
                        <p className="text-red"> Wait ~ {detail?.chatWaitTime} m </p> 
                        :
                        <p></p>
                        :
                        <p className="text-red"> Offline </p> 
                      
                      }
                      </div>
                    </div>
                  </Link>
                  : 
                  <div>
                    <div className="flex  items-center gap-[48px] rounded-[10px] border-[1px] border-[#DC6563] px-4 cursor-pointer" onClick={() => {setAstrologername(detail?.name), setChatcharges(detail?.chatCharges), setShowModal(true) }}>
                      <Image
                        src="/assets/talk-to-astrologer/chat.png"
                        alt="chat"
                        width={33}
                        height={33}
                      />

                      <div className="">
                        <p className="font-[Roboto] text-[24px] font-bold p-1">
                          Start Chat
                        </p>
                        {detail?.chatWaitTime}
                        {detail?.chatStatus === "Online" ? detail?.chatWaitTime > 0
                        ?
                        <p>Wait ~ {detail?.chatWaitTime}</p>
                        :
                        <p></p>
                        :
                        <p className="text-red"> Offline </p>  
                      
                      }
                      </div>
                    </div>
                    
                    </div>
                  }
                  </div>
                  :
                  
                    <div className="flex  items-center gap-[48px] rounded-[10px] border-[1px] border-[#DC6563] px-4 cursor-pointer" onClick={() => setIsOpen(true)}>
                      <Image
                        src="/assets/talk-to-astrologer/chat.png"
                        alt="chat"
                        width={33}
                        height={33}
                      />

                      <div className="">
                        <p className="font-[Roboto] text-[24px] font-bold p-3">
                          Start Chat
                        </p>
                        {detail?.chatStatus === "Online" ? detail?.chatWaitTime > 0
                        ?
                        <p className="text-red"> Wait ~ {detail?.chatWaitTime} </p> 
                        :
                        <p></p>
                        :
                        <p className="text-red"> Offline </p> 
                      }
                      </div>
                    </div>
                 

                }
                
              
                
              <div className="">
                {isuserLogged ? 
                <div>
                  {walletbalance > minCallbalance ?                  
                <Link href={"/talk-to-astrologer/talk?id=" + detail?._id}>
                <div className="flex  items-center  gap-[48px] rounded-[10px] border-[1px] border-[#DC6563] px-4">
                  <Image
                    src="/assets/talk-to-astrologer/call.png"
                    alt="chat"
                    width={33}
                    height={33}
                  />
                  <div className="">
                    <p className="font-[Roboto] text-[24px] font-bold p-1">
                      Start Call
                    </p>
                    {detail?.callStatus === "Online" ? detail?.callWaitTime > 0 
                    ?
                    <p className="text-red"> Wait ~ { detail?.callWaitTime }</p>  
                    :
                    <p className="p-3"></p>
                    :
                    <p className="text-red"> Offline </p>
                  }
                    
                  </div>
                </div>
                </Link>
                :
                <div>
<div className="flex  items-center  gap-[48px] rounded-[10px] border-[1px] border-[#DC6563] px-4 cursor-pointer" onClick={() => {setAstrologername(detail?.name) , setChatcharges(detail?.callCharges) , setShowModal(true)}}>
                  <Image
                    src="/assets/talk-to-astrologer/call.png"
                    alt="chat"
                    width={33}
                    height={33}
                  />
                  <div className="">
                    <p className="font-[Roboto] text-[24px] font-bold p-3">
                      Start Call
                    </p>
                    {detail?.callStatus === "Online" ? detail?.callWaitTime > 0 
                    ?
                    <p className="text-red"> Wait ~ { detail?.callWaitTime }</p>  
                    :
                    <p className="p-1"></p>
                    :
                    <p className="text-red"> Offline </p>
                  }
                    
                  </div>
                </div>
                  </div>
                }
                </div>
                :
                
                <div className="flex  items-center  gap-[48px] rounded-[10px] border-[1px] border-[#DC6563] px-4 cursor-pointer" onClick={() => setIsOpen(true)}>
                  <Image
                    src="/assets/talk-to-astrologer/call.png"
                    alt="chat"
                    width={33}
                    height={33}
                  />
                  <div className="">
                    <p className="font-[Roboto] text-[24px] font-bold p-3">
                      Start Call
                    </p>
                    {detail?.callStatus === "Online" ? detail?.callWaitTime > 0 
                    ?
                    <p className="text-red"> Wait ~ { detail?.callWaitTime }</p>  
                    :
                    <p className="p-1"></p>
                    :
                    <p className="text-red"> Offline </p>
                  }
                    
                  </div>
                </div>
                
                }
              </div>
            </div>
          </div>
          <div className="absolute top-5 right-5">
            <ThreeDots />
          </div>
        </div>

        <div className="lg:flex"></div>
    </div>
      </Section >
    </div >
  );
};

export default AstrologerDesc;
