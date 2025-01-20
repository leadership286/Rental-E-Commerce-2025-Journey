"use client"
import React from "react";
import CarSummary from "./carDetails";
import Navbar from "../Components/Navbarr/Navbar";
import { Footer } from "../Components/Footer/footer/Footer";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

export default function BillingInfo() {
  const handleRentNowClick = () => {
    // Trigger toast notification on Rent Now button click
    toast.success("Congratulations! Rental has been successfully submitted!", {
      position: "top-right", // Position of toast
      autoClose: 3000, // Auto close after 3 seconds
      hideProgressBar: true, // Hide progress bar
      closeOnClick: true, // Close on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow dragging
      progress: undefined,
      theme: "light", // Choose a theme
    });
  };

  return (
    <>
    <Navbar />
    <div className="w-full h-[2270px] pt-[32px] bg-[#F6F7F9]">
      {/* billing Info */}
      <div className="w-[852px] h-[336px] bg-[#FFFFFF] rounded-[10px] mx-7 ">
        <div className="flex justify-between items-center px-[24px] pt-[24px]">
          <div>
            <p className="text-[20px] font-bold text-[#1A202C] leading-[30px] ">
              Billing Info
            </p>
            <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px] mt-[4px]">
              Please enter your billing info
            </p>
          </div>
          <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px]">
            Step 1 of 4
          </p>
        </div>

        <div className="grid grid-cols-2 gap-[32px] px-[24px] pt-[32px]">
          <div className="h-[92px]">
            <p className="text-[16px] font-semibold text-[#1A202C] leading-[24px]">
              Name
            </p>
            <input
              type="text"
              placeholder="Your name"
              required
              className=" w-[386px] h-[56px] mt-[8px] px-4 border rounded-[10px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
            />
          </div>

          <div className="h-[92px]">
            <p className="text-[16px] font-semibold text-[#1A202C] leading-[24px]">
              Phone Number
            </p>
            <input
              type="text"
              placeholder="Phone number"
              required
              className="w-[386px] h-[56px] mt-[8px] px-4 border rounded-[10px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
            />
          </div>

          <div className="h-[92px]">
            <p className="text-[16px] font-semibold text-[#1A202C] leading-[24px]">
              Address
            </p>
            <input
              type="text"
              placeholder="Address"
              required
              className="w-[386px] h-[56px] mt-[8px] px-4 border rounded-[10px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
            />
          </div>

          <div className="h-[92px]">
            <p className="text-[16px] font-semibold text-[#1A202C] leading-[24px]">
              Town / City
            </p>
            <input
              type="text"
              placeholder="Town or city"
              required
              className="w-[386px] h-[56px] mt-[8px] px-4 border rounded-[10px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
            />
          </div>
        </div>
      </div>
      <div className="w-[852px] h-[664px] rounded-[10px] bg-[#FFFFFF] mx-7 mt-7">
        <div className="flex justify-between items-center px-[24px] pt-[24px]">
          <div>
            <p className="text-[20px] font-bold leading-[30px] text-[#1A202C]">
              Rental Info
            </p>
            <p className="text-[14px] font-medium leading-[21px] text-[#90A3BF] mt-[4px]">
              Please select your rental date
            </p>
          </div>
          <p className="text-[14px] font-medium leading-[21px] text-[#90A3BF]">
            Step 2 of 4
          </p>
        </div>

        {/* Pick-Up and Drop-Off*/}
        <div className="px-[24px] pt-[32px] space-y-[40px]">
          {/* Pick-Up */}
          <div>
            <div className="flex items-center gap-[8px]">
              <div className="w-[16px] h-[16px] rounded-full bg-[#3563E94D] flex justify-center items-center">
                <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-full"></div>
              </div>
              <p className="text-[16px] font-semibold leading-[20px] text-[#1A202C]">
                Pick - Up
              </p>
            </div>

            <div className="grid grid-cols-2 gap-[24px] mt-[24px]">
              <div>
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Locations
                </p>
                <div className="relative mt-[8px]">
                  <input
                    type="text"
                    placeholder="Select your city"
                    required
                    className="w-full h-[56px] border rounded-[10px] px-[16px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
                  />
                  <Image
                    src="/icons/Arrow-down.png"
                    alt="Arrow"
                    className="absolute  top-[50%] right-[16px] transform -translate-y-[50%]"
                    width={14} height={14}
                  />
                </div>
              </div>

              <div>
                <p className="text-[16px] font-semibold text-[#1A202C]">Date</p>
                <div className="relative mt-[8px]">
                  <input
                    type="text"
                    placeholder="Select your date"
                    required
                    className="w-full h-[56px] border rounded-[10px] px-[16px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
                  />
                  <Image
                    src="/icons/Arrow-down.png"
                    alt="Arrow"
                    className="absolute  top-[50%] right-[16px] transform -translate-y-[50%]"
                    width={14} height={14}
                  />
                </div>
              </div>

              <div>
                <p className="text-[16px] font-semibold text-[#1A202C]">Time</p>
                <div className="relative mt-[8px]">
                  <input
                    type="text"
                    placeholder="Select your time"
                    required
                    className="w-full h-[56px] border rounded-[10px] px-[16px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
                  />
                  <Image
                    src="/icons/Arrow-down.png"
                    alt="Arrow"
                    className="absolute top-[50%] right-[16px] transform -translate-y-[50%]"
                    width={14} height={14}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Drop-Off */}
          <div>
            <div className="flex items-center gap-[8px]">
              <div className="w-[16px] h-[16px] rounded-full bg-[#3563E94D] flex justify-center items-center">
                <div className="w-[8px] h-[8px] bg-[#3563E9] rounded-full"></div>
              </div>
              <p className="text-[16px] font-semibold leading-[20px] text-[#1A202C]">
                Drop - Off
              </p>
            </div>

            <div className="grid grid-cols-2 gap-[24px] mt-[24px]">
              <div>
                <p className="text-[16px] font-semibold text-[#1A202C]">
                  Locations
                </p>
                <div className="relative mt-[8px]">
                  <input
                    type="text"
                    placeholder="Select your city"
                    required
                    className="w-full h-[56px] border rounded-[10px] px-[16px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
                  />
                  <Image
                    src="/icons/Arrow-down.png"
                    alt="Arrow"
                    className="absolute  top-[50%] right-[16px] transform -translate-y-[50%]"
                    width={14} height={14}
                  />
                </div>
              </div>

              <div>
                <p className="text-[16px] font-semibold text-[#1A202C]">Date</p>
                <div className="relative mt-[8px]">
                  <input
                    type="input"
                    placeholder="Select your date"
                    required
                    className="w-full h-[56px] border rounded-[10px] px-[16px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
                  />
                  <Image
                    src="/icons/Arrow-down.png"
                    alt="Arrow"
                    className="absolute  top-[50%] right-[16px] transform -translate-y-[50%]"
                    width={14} height={14}
                  />
                </div>
              </div>

              <div>
                <p className="text-[16px] font-semibold text-[#1A202C]">Time</p>
                <div className="relative mt-[8px]">
                  <input
                    type="number"
                    placeholder="Select your time"
                    required
                    className="w-full h-[56px] border rounded-[10px] px-[16px] text-[14px] font-medium text-[#90A3BF] bg-[#F6F7F9]"
                  />
                  <Image
                    src="/icons/Arrow-down.png"
                    alt="Arrow"
                    className="absolute  top-[50%] right-[16px] transform -translate-y-[50%]"
                    width={14} height={14}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Mehtod */}
      <div className="w-[852px] h-[664px] rounded-[10px] bg-[#FFFFFF] mx-7 mt-7">
        <div className="w-[852px] h-[596px] bg-white rounded-[10px] p-6  ">
          <div className="flex justify-between items-center mb-6 ">
            <div>
              <p className="text-lg font-bold text-[#1A202C]">Payment Method</p>
              <p className="text-sm font-medium text-[#90A3BF]">
                Please enter your payment method
              </p>
            </div>
            <p className="text-sm font-medium text-right text-[#90A3BF]">
              Step 3 of 4
            </p>
          </div>

          <div className="w-full h-[270px] bg-[#F6F7F9] rounded-[10px] p-6 ">
            <div className="flex justify-between items-center mb-8 ">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/mark.png"
                  alt=""
                  width={4}
                  height={4}
                  className=" rounded-full bg-[#3563E94D]"
                />
                <p className="text-base font-semibold text-[#1A202C]">
                  Credit Card
                </p>
              </div>
              <div className="flex gap-3">
                <Image
                  src="/icons/Visa.png"
                  alt="Visa Logo"
                  width={92}
                  height={4}
                  className="w-[92px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-[#1A202C]">
                    Card Number
                  </p>
                  <input
              type="number"
              placeholder="Enter Card Number"
              required
              className="w-full h-14 bg-white border rounded-[10px] p-3 text-[#90A3BF] "
            />
                </div>

                <div className="mb-4">
                <input
              type="text"
              required
              placeholder="Card Holder"
              className="w-full h-14 bg-white border rounded-[10px] p-3 text-[#90A3BF] "
            />
               
                </div>
              </div>

              <div>
                <div className="mb-4">
                  <p className="text-sm font-semibold text-[#1A202C]">
                    Expiration Date
                  </p>
                  <input
              type="number"
              required
              placeholder="DD/MM/YY"
              className="w-full h-14 bg-white border rounded-[10px] p-3 text-[#90A3BF] "
            />
               
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-[#1A202C]">CVC</p>
                  <input
              type="text"
              required
              placeholder="Enter CVC"
              className="w-full h-14 bg-white border rounded-[10px] p-3 text-[#90A3BF] "
            />
               
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-6 ]">
            <div className="w-full h-14 bg-[#F6F7F9] flex items-center gap-4 px-6 rounded">
              <Image
                src="/icons/iactions-select .png"
                alt=""
                width={6}
                height={6}
              />
              <p className="text-sm font-semibold  text-[#1A202C]">PayPal</p>
              <Image
                src="/icons/PayPal.png"
                alt="PayPal Icon"
                width={100}
                height={24}
                className=" ml-auto"
              />
            </div>

            <div className="w-full h-14 bg-[#F6F7F9] flex items-center gap-4 px-6 rounded">
              <Image
                src="/icons/iactions-select .png"
                alt=""
                width={6}
                height={6}
              />
              <p className="text-sm font-semibold text-[#1A202C]">Bitcoin</p>
              <Image
                src="/icons/Bitcoin (1).png"
                alt="Bitcoin Icon"
                width={94}
                height={20}
                className=" ml-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation */}
      <div className="w-[852px] rounded-[10px] bg-[#FFFFFF] mx-7 mt-7 mb-9">
        <div className="w-[852px] h-[484px] bg-white rounded-[10px] p-6">
          <div className="flex justify-between items-start gap-4 mb-6">
            <div className="w-[440px]">
              <p className="text-[20px] font-bold text-[#1A202C] leading-[30px]">
                Confirmation
              </p>
              <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px] mt-2">
                We are getting to the end. Just a few clicks and your rental is
                ready!
              </p>
            </div>

            <div className="w-[72px] text-right mt-12">
              <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px]">
                Step 4 of 4
              </p>
            </div>
          </div>

          <div className="w-[804px] gap-[24px] mb-6 ">
            <div className="flex items-center h-[56px] mb-4 pl-6 bg-[#F6F7F9] rounded-[10px]">
              <input type="checkbox" className="w-[24px] h-[24px] mr-4" />
              <p className="text-[16px] font-semibold text-[#1F2544] leading-[24px]">
                I agree with sending Marketing and newsletter emails. No spam,
                promised!
              </p>
            </div>

            <div className="flex items-center h-[56px] pl-6 bg-[#F6F7F9] rounded-[10px]">
              <input type="checkbox" className="w-[24px] h-[24px] mr-4" />
              <p className="text-[16px] font-semibold text-[#1F2544] leading-[24px]">
                I agree with our terms and conditions and privacy policy.
              </p>
            </div>
          </div>

          <div className="flex items-center mb-6">
              <button
                onClick={handleRentNowClick}
                className="w-[140px] h-[56px] bg-[#3563E9] rounded-[10px] flex justify-center items-center gap-2 text-white"
              >
                <p className="text-[16px] font-bold leading-[20px]">Rent Now</p>
              </button>
            </div>

            {/* React Toastify container */}
            <ToastContainer />
         
        
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <Image src="/icons/Layer.png" alt="Security Icon"
                width={32}
                height={32} />
              </div>
              </div>
              <p className=" text-[16px] font-semibold text-[#1A202C]">
                All your data are safe
              </p>
           

            <p className="text-[14px] font-medium text-[#90A3BF] leading-[21px]">
              We are using the most advanced security to provide you the best
              experience ever.
            </p>
          </div>
        </div>
      </div>
      <CarSummary />
      <Footer />
    </div>
    </>
  );
}