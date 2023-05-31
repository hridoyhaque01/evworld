import React from "react";
// import { future, inovation, passin } from "../../../Assets/getImages";
import AboutSingleItem from "./AboutSingleItem";

function About() {
  return (
    <section className="py-10 md:pt-10 md:pb-20 lg:pt-20 lg:pb-36">
      <div className="flex flex-col md:bg-navySemi rounded-3xl p-10 gap-4 md:gap-11">
        <div className="flex flex-col md:flex-row items-center lg:col-span-3 gap-4 md:bg-navySemi md:rounded-[40px]">
          {/* single about content  */}
          <AboutSingleItem
            // icon={inovation}
            title="Mission and Vision"
            texts="Our mission is to create a cleaner and more sustainable future
              through electric mobility."
          >
            <svg
              viewBox="0 0 69 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 lg:w-16 mx-auto"
            >
              <path
                d="M56.0473 30.0878C56.0473 36.2383 53.6109 41.9099 49.138 46.0635C45.583 49.4584 44.8243 52.0945 44.0655 56.0484C44.0655 56.0484 42.1486 58.4978 40.9499 60.1755H27.6503L24.0958 56.0484C22.9772 52.0544 22.2585 49.1786 18.8636 45.9434C13.592 40.8714 11.1956 33.4826 12.4733 26.1734C13.9513 17.4668 20.741 10.3978 29.368 8.60057C30.9256 8.28075 32.5231 8.12109 34.0807 8.12109C39.1131 8.12109 44.0255 9.79824 47.9393 13.0334C53.0919 17.2271 56.0473 23.4577 56.0473 30.0878Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M56.0477 30.0878C56.0477 36.2383 53.6113 41.9099 49.1384 46.0635C45.5834 49.4584 44.8247 52.0945 44.0659 56.0484C44.0659 56.0484 42.149 58.4978 40.9503 60.1755H34.0811V8.12109C39.1135 8.12109 44.0259 9.79824 47.9397 13.0334C53.0923 17.2271 56.0477 23.4577 56.0477 30.0878Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M5.99091 32.0848H1.99697C0.893436 32.0848 0 31.1918 0 30.0878C0 28.9843 0.893436 28.0908 1.99697 28.0908H5.99091C7.09445 28.0908 7.98788 28.9843 7.98788 30.0878C7.98788 31.1918 7.09445 32.0848 5.99091 32.0848Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M66.1657 32.0848H62.1718C61.0682 32.0848 60.1748 31.1918 60.1748 30.0878C60.1748 28.9843 61.0682 28.0908 62.1718 28.0908H66.1657C67.2693 28.0908 68.1627 28.9843 68.1627 30.0878C68.1627 31.1918 67.2693 32.0848 66.1657 32.0848Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M9.86755 18.1062C9.52796 18.1062 9.18473 18.0204 8.87114 17.8389L5.41129 15.8419C4.45597 15.2902 4.12834 14.0696 4.68011 13.1138C5.23239 12.1579 6.45502 11.8303 7.40826 12.3826L10.8681 14.3796C11.8234 14.9313 12.1511 16.1519 11.5993 17.1077C11.229 17.7474 10.5582 18.1062 9.86755 18.1062Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M61.7504 48.0604C61.4108 48.0604 61.0675 47.9746 60.754 47.7931L57.2941 45.7961C56.3388 45.2443 56.0112 44.0238 56.5629 43.0679C57.1131 42.1121 58.3358 41.7865 59.2911 42.3368L62.7509 44.3337C63.7062 44.8855 64.0339 46.106 63.4821 47.0619C63.1118 47.7015 62.441 48.0604 61.7504 48.0604Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M20.1045 7.45335C19.4139 7.45335 18.743 7.09451 18.3727 6.45486L16.3758 2.995C15.8235 2.03968 16.1511 0.818618 17.1069 0.266851C18.0586 -0.283356 19.2813 0.0447924 19.8351 0.998034L21.8321 4.45789C22.3844 5.41321 22.0567 6.63428 21.1009 7.18604C20.7868 7.36754 20.4436 7.45335 20.1045 7.45335Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M6.41185 48.0604C5.72124 48.0604 5.05038 47.7015 4.68011 47.0619C4.12834 46.106 4.45597 44.8855 5.41129 44.3337L8.87114 42.3368C9.82075 41.7865 11.0434 42.1121 11.5993 43.0679C12.1511 44.0238 11.8234 45.2443 10.8681 45.7961L7.40826 47.7931C7.09467 47.9746 6.75144 48.0604 6.41185 48.0604Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M58.2947 18.1062C57.604 18.1062 56.9332 17.7474 56.5629 17.1077C56.0112 16.1519 56.3388 14.9313 57.2941 14.3796L60.754 12.3826C61.7036 11.8303 62.9303 12.1579 63.4821 13.1138C64.0339 14.0696 63.7062 15.2902 62.7509 15.8419L59.2911 17.8389C58.9775 18.0204 58.6343 18.1062 58.2947 18.1062Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M48.0575 7.4746C47.7184 7.4746 47.3752 7.38879 47.061 7.20729C46.1052 6.65553 45.7776 5.43446 46.3299 4.47914L48.3268 1.01929C48.8807 0.0660457 50.0976 -0.261582 51.055 0.288104C52.0108 0.840392 52.3385 2.06094 51.7862 3.01626L49.7892 6.47611C49.4189 7.11577 48.7481 7.4746 48.0575 7.4746Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M47.461 28.6899C46.7023 27.8911 45.424 27.8911 44.6653 28.6899L42.0692 31.2459L39.4732 28.6899C38.7144 27.8911 37.4361 27.8911 36.6774 28.6899L34.0813 31.2459L31.4853 28.6899C30.7265 27.8911 29.4483 27.8911 28.6895 28.6899L26.0935 31.2459L23.4974 28.6899C22.7386 27.8911 21.4604 27.8911 20.7016 28.6899C19.9028 29.4487 19.9028 30.7269 20.7016 31.4857L24.5359 35.36L32.0844 46.6626V58.0454C32.0844 59.1635 32.9627 60.1755 34.0813 60.1755C35.1999 60.1755 36.0783 59.1635 36.0783 58.0454V46.6626L43.6267 35.36L47.461 31.4857C48.2598 30.7269 48.2598 29.4487 47.461 28.6899ZM34.0813 42.469L28.6495 34.3215L30.0874 32.9236L32.6835 35.4796C33.0428 35.879 33.5623 36.0787 34.0813 36.0787C34.6003 36.0787 35.1199 35.879 35.4792 35.4796L38.0753 32.9236L39.5132 34.3215L34.0813 42.469Z"
                className="fill-navyDark group-hover:fill-pureWhite"
              />
              <path
                d="M47.4608 31.4857L43.6265 35.36L36.078 46.6626V58.0454C36.078 59.1635 35.1997 60.1755 34.0811 60.1755V42.469L39.5129 34.3215L38.075 32.9236L35.4789 35.4796C35.1196 35.879 34.6001 36.0787 34.0811 36.0787V31.2459L36.6771 28.6899C37.4359 27.8911 38.7141 27.8911 39.4729 28.6899L42.0689 31.2459L44.6655 28.6899C45.4243 27.8911 46.702 27.8911 47.4608 28.6899C48.2595 29.4487 48.2595 30.7269 47.4608 31.4857Z"
                className="fill-navyDark group-hover:fill-pureWhite"
              />
              <path
                d="M24.0967 56.0488V62.1729C24.0967 65.4876 26.7723 68.1638 30.0876 68.1638H38.0755C41.3908 68.1638 44.0664 65.4876 44.0664 62.1729V56.0488H24.0967Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M44.0659 56.0488V62.1729C44.0659 65.4876 41.3903 68.1638 38.075 68.1638H34.0811V56.0488H44.0659Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
            </svg>
          </AboutSingleItem>

          <div className="hidden md:block ">
            <svg
              width="92"
              height="12"
              viewBox="0 0 92 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-16 lg:w-auto"
            >
              <path
                d="M90.4746 10.9551C45.4883 -11.411 1.01032 10.9551 1.01032 10.9551"
                stroke="#C1EF00"
                strokeWidth="1.42007"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2.84 2.84"
              />
            </svg>
          </div>

          <AboutSingleItem
            title="Greener Future"
            texts="We believe that a greener future is possible, and we are committed to making it a reality."
          >
            <svg
              viewBox="0 0 78 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 lg:w-16 mx-auto"
            >
              <path
                d="M18.088 34.0075C18.088 24.0155 25.1328 15.6395 34.516 13.5814C27.1761 14.516 19.501 17.6981 12.0643 22.9268C5.36086 27.6401 1.22143 32.3123 1.04857 32.5089C0.298914 33.3612 0.298914 34.6375 1.04857 35.4898C1.22143 35.6864 5.36086 40.3586 12.0644 45.0718C19.4405 50.258 27.0511 53.4308 34.3366 54.3943C25.043 52.2696 18.088 43.9356 18.088 34.0075Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M22.6025 34.0092C22.6025 43.0513 29.9587 50.4075 39.0008 50.4075C48.0428 50.4075 55.399 43.0513 55.399 34.0092C55.399 24.9672 48.0428 17.611 39.0008 17.611C29.9587 17.611 22.6025 24.9672 22.6025 34.0092ZM42.0096 27.2312H48.0273C49.2736 27.2312 50.284 28.2415 50.284 29.4878V35.5055C50.284 36.7518 49.2736 37.7622 48.0273 37.7622C46.7811 37.7622 45.7707 36.7518 45.7707 35.5055V34.9358L40.5964 40.1101C39.7151 40.9913 38.2865 40.9914 37.405 40.1101L34.4836 37.1888L31.6046 40.0678C30.7234 40.949 29.2945 40.9493 28.4132 40.0678C27.5319 39.1867 27.5319 37.7579 28.4132 36.8765L32.8879 32.4017C33.7688 31.5204 35.1988 31.521 36.0792 32.4017L39.0008 35.323L42.5794 31.7444H42.0096C40.7634 31.7444 39.753 30.7341 39.753 29.4878C39.753 28.2415 40.7634 27.2312 42.0096 27.2312Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M76.951 32.5088C76.7782 32.3121 72.6387 27.64 65.9352 22.9268C58.4986 17.698 50.8235 14.516 43.4834 13.5814C52.8667 15.6393 59.9114 24.0154 59.9114 34.0073C59.9114 43.9355 52.9565 52.2694 43.663 54.3941C50.9485 53.4308 58.5593 50.2578 65.9352 45.0716C72.6387 40.3584 76.778 35.6861 76.951 35.4896C77.7007 34.6374 77.7007 33.361 76.951 32.5088Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M56.7513 55.7178C56.1281 54.6384 54.748 54.2684 53.6688 54.8919C52.5893 55.515 52.2196 56.895 52.8428 57.9744L55.1747 62.0134C55.7998 63.0961 57.1812 63.4608 58.2573 62.8393C59.3367 62.2162 59.7065 60.8361 59.0832 59.7567L56.7513 55.7178Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M38.9988 9.02656C40.2451 9.02656 41.2555 8.01619 41.2555 6.76992V2.25664C41.2555 1.01037 40.2451 0 38.9988 0C37.7526 0 36.7422 1.01037 36.7422 2.25664V6.76992C36.7422 8.01619 37.7526 9.02656 38.9988 9.02656Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M53.744 12.9767C54.8186 13.5973 56.2007 13.235 56.8265 12.1508L59.0832 8.24228C59.7065 7.16301 59.3367 5.7827 58.2572 5.15971C57.178 4.53628 55.7977 4.90607 55.1747 5.98564L52.918 9.89414C52.2948 10.9734 52.6645 12.3536 53.744 12.9767Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M38.9988 58.823C37.7526 58.823 36.7422 59.8334 36.7422 61.0796V65.7434C36.7422 66.9896 37.7526 68 38.9988 68C40.2451 68 41.2555 66.9896 41.2555 65.7434V61.0796C41.2555 59.8334 40.2451 58.823 38.9988 58.823Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M21.1727 12.1507C21.7978 13.2335 23.1792 13.5981 24.2553 12.9766C25.3347 12.3535 25.7045 10.9734 25.0812 9.89408L22.8246 5.98558C22.2013 4.906 20.8213 4.53636 19.742 5.15965C18.6626 5.78278 18.2928 7.16294 18.9161 8.24222L21.1727 12.1507Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M24.3305 54.8919C23.2512 54.2683 21.8709 54.6385 21.2479 55.7178L18.9161 59.7568C18.2928 60.8362 18.6626 62.2163 19.742 62.8393C20.8171 63.4602 22.1989 63.097 22.8246 62.0134L25.1564 57.9745C25.7797 56.8952 25.4099 55.515 24.3305 54.8919Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
            </svg>
          </AboutSingleItem>

          <div className="hidden md:block">
            <svg
              width="92"
              height="12"
              viewBox="0 0 92 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:w-16 lg:w-auto"
            >
              <path
                d="M90.9902 1.01465C46.0039 23.3807 1.52595 1.01466 1.52595 1.01466"
                stroke="#C1EF00"
                strokeWidth="1.42007"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="2.84 2.84"
              />
            </svg>
          </div>

          <AboutSingleItem
            title="Passion for Innovation"
            texts="Our journey began with a passion for innovation and a drive to revolutionize transportation."
          >
            <svg
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 lg:w-16 mx-auto"
            >
              <path
                d="M53.2527 36.5142V19.171C53.2527 13.2987 48.4746 8.52051 42.6022 8.52051H36.2119V12.7807H42.6022C46.126 12.7807 48.9925 15.6472 48.9925 19.171V36.5142C45.3276 37.4666 42.6022 40.773 42.6022 44.7322V48.9924C42.6022 50.1698 43.5549 51.1225 44.7323 51.1225V53.2526C44.7323 54.43 45.685 55.3828 46.8624 55.3828C48.0398 55.3828 48.9925 54.43 48.9925 53.2526V51.1225H53.2527V53.2526C53.2527 54.43 54.2055 55.3828 55.3828 55.3828C56.5602 55.3828 57.5129 54.43 57.5129 53.2526V51.1225C58.6903 51.1225 59.643 50.1698 59.643 48.9924V44.7322C59.643 40.773 56.9176 37.4666 53.2527 36.5142Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M23.3249 15.5141C23.1481 15.1459 22.7757 14.9108 22.3659 14.9108H17.9664L21.122 10.1763C21.3404 9.84974 21.3612 9.42955 21.174 9.08216C20.9889 8.73685 20.629 8.52051 20.2358 8.52051H15.9756C15.5721 8.52051 15.2039 8.74933 15.0229 9.1092L10.7627 17.6296C10.5984 17.9604 10.615 18.3514 10.8085 18.6655C11.004 18.9796 11.3472 19.171 11.7154 19.171H16.3833L12.8928 26.15C12.6494 26.6368 12.8117 27.2296 13.2714 27.5229C13.4482 27.6373 13.6479 27.6914 13.8455 27.6914C14.1596 27.6914 14.4675 27.5521 14.6776 27.292L23.198 16.6415C23.4539 16.3212 23.5038 15.8843 23.3249 15.5141Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
              <path
                d="M29.8214 0H4.2602C1.90739 0 0 1.90726 0 4.2602V55.3826C0 57.7355 1.90739 59.6429 4.2602 59.6429H17.0408V51.1224H12.7806C8.07486 51.1224 4.2602 47.3077 4.2602 42.602H8.52041C12.4861 42.602 15.7895 45.3238 16.7396 48.9923H17.0408C17.0408 44.2866 20.8555 40.4719 25.5612 40.4719H29.8214C29.8214 45.1776 26.0068 48.9923 21.301 48.9923H19.1709V51.1224V59.6429H29.8214C32.1742 59.6429 34.0816 57.7355 34.0816 55.3826V4.2602C34.0816 1.90726 32.1742 0 29.8214 0ZM14.9107 36.2117C14.9107 37.3881 13.9571 38.3418 12.7806 38.3418H10.6505C9.47404 38.3418 8.52041 37.3881 8.52041 36.2117V34.0816C8.52041 32.9052 9.47404 31.9515 10.6505 31.9515H12.7806C13.9571 31.9515 14.9107 32.9052 14.9107 34.0816V36.2117ZM25.5612 36.2117C25.5612 37.3881 24.6076 38.3418 23.4311 38.3418H21.301C20.1246 38.3418 19.1709 37.3881 19.1709 36.2117V34.0816C19.1709 32.9052 20.1246 31.9515 21.301 31.9515H23.4311C24.6076 31.9515 25.5612 32.9052 25.5612 34.0816V36.2117ZM29.8214 29.8214H4.2602V6.39031H29.8214V29.8214Z"
                className="fill-primaryColor group-hover:fill-blackFadeDark"
              />
            </svg>
          </AboutSingleItem>
        </div>
        <div className="bg-navySemi py-6 px-4 md:p-0 rounded-2xl text-pureWhite text-xs md:text-base">
          <p>
            Our mission is simple: to create a cleaner and more sustainable
            future through electric mobility. We believe that electric vehicles
            are the future of transportation, and we are committed to playing a
            leading role in this transition. By offering electric cars that are
            reliable, efficient, and accessible, we aim to accelerate the
            adoption of electric mobility and contribute to a greener planet.
            Our vision is a world where electric cars are the norm, and
            emissions from transportation are a thing of the past. We envision a
            future where our streets are filled with quiet, clean, and efficient
            electric vehicles, powered by renewable energy sources such as wind
            and solar. This vision drives us to innovate and push the boundaries
            of what is possible in electric mobility, from developing advanced
            battery technologies to designing cutting-edge charging
            infrastructure. At the heart of our mission and vision is a
            commitment to sustainability. We believe that electric mobility is
            not just about replacing traditional cars with electric ones, but
            about creating a more sustainable transportation system as a whole.
            By reducing emissions, promoting renewable energy, and working to
            minimize our environmental impact, we hope to create a better future
            for generations to come. In summary, our mission and vision are
            centered around creating a cleaner and more sustainable future
            through electric mobility. We are passionate about our work, and we
            believe that by working together, we can create a world where
            electric vehicles are the norm and our planet is healthier and more
            vibrant than ever before.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
