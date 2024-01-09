// pages/compatibility/select-partner.js
import Section from "@/components/Section";
import Sign from "@/components/compatibility/love/Sign";
import Store from "@/components/planets/Store";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";


const SelectPartner = () => {
  const router = useRouter();
  const { yourSign } = router.query;

  if (!yourSign) {
    // Redirect to the SelectSign page if yourSign is not selected
    // You can add additional logic or error handling as needed
    router.push("/compatibility/select-sign");
    return null;
  }

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
    <Section>
    <h1 className="text-[36px] font-bold text-center pt-[30px]"> {yourSign} Love Compatibility</h1>
    <p className="text-justify">{`Your analytical, thoughtful, and sometimes moody mentality demands that your mate show you just how much he or she loves you. You want regular verbal reminders that you are appreciated, and tokens of affection really lift your spirits. Receiving also makes you a generous giver. Find out if your relationship will go all the way...`}</p>
    </Section>
    <Sign headText="Choose Your Partner’s Sign" onSelect={(partnerSign) => {
        // Handle the partner sign selection logic here
        router.push(`/compatibility/result?yourSign=${yourSign}&partnerSign=${partnerSign}`);
      }} />
      <Store/>
    </div>
  );
};

export default SelectPartner;
