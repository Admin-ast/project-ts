import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import Review from "@/components/home/Review";
import AstrologerDesc from "@/components/talk-to-astrologer/AstrologerDesc";
import Rating from "@/components/talk-to-astrologer/Rating";
import SimilarConsultants from "@/components/talk-to-astrologer/SimilarConsultants";
import { getFetcher } from "@/service";
import { HomeIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState} from "react";
import { useRouter } from "next/router";

type Props = {};


const astrologer = (props: Props) => {
  const[astrologer,setAstrologer] = useState<any>({});
  const[averagerating,setAveragerating] = useState(0);
  const[totalrating,setTotalrating] = useState(0);
  const[similarconsultant,setSimilarconsultant] = useState<any>([]);
  const[review,setReview] = useState<any>([]);
  const[walletbalance, setWalletbalance] = useState(0);
  const router = useRouter();
  
  useEffect(() => {
        const getastrologer = async() => {
        if(!router.isReady) return;
        const { id } = router.query;
        
              const astro = await getFetcher('/astrologer/getastrologer/'+id);
              console.log(astro);
              if(astro.status){

                setAstrologer(astro?.res?.astrologer);
                setAveragerating(Math.round(astro?.res?.astrologer?.averageRating * 100)/100);
                setTotalrating(astro?.res?.astrologer?.totalRating);
                setSimilarconsultant(astro?.res?.similarastrologers);
                setReview(astro?.res?.reviews);
                setWalletbalance(astro?.res?.walletbalance);
                console.log(astro?.res.reviews);
                
              }
        }
        getastrologer();
  },[router.isReady]);
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
              Talk To Astrologer
            </p>
          </div>
        </Section>
      </div>
      <AstrologerDesc waitTime="10 min" detail={astrologer} walletbalance={walletbalance} />
      <Section>
        <div className="mt-[35px]  gap-[18px] lg:flex">
          <Rating  averagerating={averagerating} totalrating={totalrating} />
          <SimilarConsultants similarconsultants={similarconsultant} />
        </div>
      </Section>

      <div className="mt-[69px]">
        <Review />
      </div>
    </div>
  );
};

export default astrologer;
