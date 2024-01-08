import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from "../forms";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import OtpInput from "react-otp-input";
import { postFetcher } from "@/service";
import { PhoneAuthProvider, RecaptchaVerifier, getAuth, onAuthStateChanged, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { useAuth } from "../contexts/AuthProvider";

type Props = {
  setActiveId: any;
  setMobileNumber: any;
  setCandidateDetails: any;
};

function PersonalDetail({
  setActiveId,
  setMobileNumber,
  setCandidateDetails,
}: Props) {
  const [showOtp, setShowOtp] = useState(false);
  const [otpValue, setOtpValue] = useState<any>();
  const [personalInfo, setPersonalInfo] = useState<any>();
  const [error, setError] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerficationCode] = useState('');
  const [recaptcha, setrecaptcha] = useState('');
  const [verificationId, setVerficationId] = useState('');
  const [token, setToken] = useState('');
  const [signed, setSigned] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [otpsend, setOtpsend] = useState(false);
  const [buttontext, setButtontext] = useState('');
 
  const firebaseConfig = {

    apiKey: "AIzaSyCB1gF8RPB2MkMMSq1FBeOw61VOHdoqp7Y",

    authDomain: "astrotalk-3ed3b.firebaseapp.com",

    projectId: "astrotalk-3ed3b",

    storageBucket: "astrotalk-3ed3b.appspot.com",

    messagingSenderId: "871346163694",

    appId: "1:871346163694:web:4bc8bfa2e316529fd508ff",

    measurementId: "G-JZ1Z6JRJ06"

  };

  firebase.initializeApp(firebaseConfig);

  const FormSchema = yup.object().shape({
    name: yup
      .string()
      .required("First Name is required")
      .matches(/^[A-Za-z ]+$/, "First name should contain only alphabets")
      .max(50, "Limit extend"),
    emailId: yup
      .string()
      .required("Email-Id is required")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Enter valid Email-Id"
      ),
    mobileNumber: yup
      .string()
      .required("Enter mobile number")
      .matches(/^^[6-9]\d{9}$/, "Enter Valid Mobile No.")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits"),

    // otp: showOtp
    //   ? yup
    //       .string()
    //       .required("Enter otp")
    //       .matches(/^^[0-9]\d{5}$/, "Enter Valid Otp")
    //       .min(6, "Must be exactly 6 digits")
    //       .max(6, "Must be exactly 6 digits")
    //   : yup.string(),
    terms: yup
      .bool()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
  });

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });

  const onSubmit = async (data: any) => {
    setPersonalInfo(data);
    const body = JSON.stringify({ mobileNumber: data.mobileNumber });
    const phone = "+91" + data.mobileNumber;
    setPhoneNumber(data.mobileNumber);
    setButtontext('hidden');
    setOtpsend(true);
    const recaptchaVerfier = new RecaptchaVerifier(getAuth(), 'send-code-button', { size: 'invisible' });

    onAuthStateChanged(getAuth(), (userCred) => {
      userCred?.getIdToken().then((token) => {
        window.localStorage.setItem('auth', 'true');
        
        setToken(token);
      }

      );
    });
        signInWithPhoneNumber(getAuth(), phone, recaptchaVerfier)
      .then((verificationId) => {
        console.log('confirmation : ' +   JSON.stringify(verificationId));
        
        setVerficationId(verificationId.verificationId);
        setMobileNumber(data.mobileNumber);
        setPersonalInfo(data);
        setShowOtp(true);
        setOtpsend(false);
      })
      .catch((error) => {

        console.error(error);
      });
    // const result = await ("/otp/generate-otp", body);
    // if (result.msg  === "Otp has been sent successfully on your mobile number") {
    //   setPersonalInfo(data);
    //   setMobileNumber(data.mobileNumber);
    //   setShowOtp(true);
    // } else {
    //   setError(result.msg);
    // }
  };

  const handleChange = (otp: any) => {
    setOtpValue(otp);
  };

  const onOtpSubmit = async () => {
    console.log('otpsubmit' + verificationId + " otpvalue " + otpValue);
    try {
      const body = JSON.stringify({
        otp: otpValue,
        mobileNumber: personalInfo.mobileNumber,
      });

      var credential = PhoneAuthProvider.credential(verificationId, otpValue);
      const result = await signInWithCredential(getAuth(), credential).then(
        () => {
          setSigned(true);
          
        }
      ).catch(
        (error) => {
          console.log("serror" + error);
         // toast.error("Otp Not Matched");
        }
      );
      }
      catch(error){
        console.log(error);
      }
    }
      
      useEffect(() => {
        if(signed){
        const body = JSON.stringify({
          mobileNumber: phoneNumber,
          token:token
        });

        const verify = async() => {
      
       const result = await postFetcher("/otp/verify-otp", body);
        
       if (result.status) {

         const body = JSON.stringify(personalInfo);
         console.log('otp  verified' + body);
         const response = await postFetcher("/astrologer/register", body);
         if (response.msg === "added successfully") {
          console.log('registerd');
           setCandidateDetails(response?.candidate);
           setActiveId(2);
         } else {
          setError("Please try after sometime");
         }
       }
      }

      verify();
    }
      },[signed]);
      
 

  return (
    <>
      {!showOtp ? (
        <div className="mx-auto max-w-sm rounded-xl bg-white p-8 shadow-xl">
          
          <Form onSubmit={handleSubmit(onSubmit)}>
            {!otpsend ? (
            <div className="space-y-8">
              
              <Input
                type="string"
                id="name"
                placeholder=" "
                name="name"
                label="Name*"
                register={register}
                errors={errors}
              />
              <Input
                type="email"
                id="emailId"
                placeholder=" "
                name="emailId"
                label="Email Id*"
                register={register}
                errors={errors}
              />
              <Input
                type="string"
                id="mobileNumber"
                placeholder=" "
                maxLength={10}
                name="mobileNumber"
                label="Mobile Number*"
                register={register}
                errors={errors}
              />
              <Checkbox
                type="checkbox"
                id="terms"
                name="terms"
                required
                register={register}
                errors={errors}
              >
                I agree to the Terms And Conditions*
              </Checkbox>
              </div>
              ) : (
                <div>                <h3 className="text-center"> Sending Otp ....</h3>
              
              </div>
              )}
            <Button id="send-code-button"
                className={"mx-auto rounded-lg bg-gradient-to-b from-[#ef824c] to-[#d84f50] py-2 text-lg font-bold text-white" + buttontext}
                btnText="GET OTP "
              />
          </Form>
          
        </div>
      ) : (
        <div className="mx-auto max-w-xl space-y-6 rounded-xl bg-[#FFF7E5] p-8">
          <p className="rounded-t-xl bg-[#000000] px-10 py-4 text-center text-3xl font-semibold text-white">
            Verify Phone
          </p>
          <p className="text-dark text-center text-base font-bold">
            Enter OTP sent to +91-{personalInfo.mobileNumber}
          </p>
          <div className="mx-auto w-fit">
            <OtpInput
              value={otpValue}
              onChange={handleChange}
              renderInput={(props) => <input {...props} />}
              inputStyle="mr-3 rounded-md border border-gray-500 bg-transparent text-gray-700 text-2xl p-1 w-full text-center"
              // inputStyle="border-none outline-none"
              numInputs={6}
            />
          </div>
          <div className="grid grid-cols-2 space-x-4 px-2 ">
            <div
              onClick={() => {
                setShowOtp(false);
              }}
            >
              <Button
                className="text-dark  mx-auto rounded-lg border-2 border-black bg-[#D9D9D9] py-3 text-lg font-bold hover:bg-gray-300 focus:ring-gray-300"
                btnText="Back"
                type="button"
              />
            </div>
            <Button
              disabled={otpValue?.length !== 6}
              onClick={onOtpSubmit}
              className={`${
                otpValue?.length === 6 ? "bg-[#D3B160] " : "bg-[#D3B160] "
              }  mx-auto cursor-pointer rounded-lg border-2 border-black py-3 text-lg font-bold text-gray-700`}
              btnText="Verify OTP"
            />
          </div>
          <div className="flex items-center justify-center gap-1">
            <p className="">Didn’t receive OTP?</p>
            <div className="">
              <p className="font-bold">Resend otp</p>
            </div>
          </div>
        </div>
      )}
      <div className="my-16 space-y-4">
        <p className="mb-8 text-center font-semibold lg:text-3xl">
          {" "}
          Sign up to become an AstroSevaTalk Verified Astrologer
        </p>
        <p className="text-left lg:text-xl">
          If looking forward to taking your astrology skills online, join
          India’s largest astrology platform, which brings you a tremendous
          opportunity to expand your customer base, both nationally and
          internationally. With 4,50,000+ daily users, and 2.5-million+ monthly
          users, the Astrotalk app is the most widely used astrology platform in
          India, with the highest percentage of paid and repeating users
          awaiting your expertise. Astrotalk was recently awarded the Most
          Trusted Astrology Platform at the prestigious Zee National Achievers
          Award.
        </p>
        <p className="text-left text-xl">
          Having served over 3-crore customers, the Astrotalk app is home to
          5000+ astrologers and offers them a platform to showcase their skills
          and help them develop a distinctive online presence. The app is
          available in 20+ languages and welcomes experts across astrological
          disciplines, including Vedic Astrology, Tarot Reading, Lal Kitab
          Reading, Numerology, and much more. In fact, to further help you
          broaden your horizon, Astrotalk brings you as many as three ways to
          interact and earn from the users - Talk to Astrologer, Chat with
          Astrologer, and Live Sessions.
        </p>
        <p className="text-left text-xl">
          Astrotalk believes in taking everyone together and thus gives both
          budding and well-experienced astrologers a fair chance to show off
          their skills. The Online astrologer registration process is fairly
          easy, and our customer care executives on the other side shall help
          you 24/7 just in case you need any assistance.
        </p>
        <p className="text-left text-xl">
          Having said that, fill out the form on the right to begin your journey
          with Astrotalk.
        </p>
      </div>
    </>
  );
}

export default PersonalDetail;
