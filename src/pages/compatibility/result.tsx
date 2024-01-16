// pages/compatibility/result.js
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import Header from "@/components/compatibility/love/Header";
import WorkCompatibilityMatches from "@/components/compatibility/work/WorkCompatibilityMatching";
import Store from "@/components/planets/Store";
const Result = () => {
  const router = useRouter();
  const { yourSign, partnerSign } = router.query;

  // Add logic to fetch and display content based on yourSign and partnerSign

  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
        <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              Compatibility
            </p>
          </div>
        </Section>
      </div>
      <div className="pt-[30px] text-[22px] font-bold  flex gap-1 justify-center items-center">
      <h1> {yourSign} </h1>
      <h1>&</h1>
      <h1>{partnerSign} Love Compatibility</h1>
      </div>
      <Header/>
      <WorkCompatibilityMatches />
      <Store/>
      {/* Display additional content based on the selected signs */}
    </div>
  );
};

export default Result;
