import React from "react";
import Image from "next/image";
import PlayStoreImg from '../../../assets/website/play_store.png';
import AppStoreImg from '../../../assets/website/app_store.png';
import Banner from "../../../assets/website/board.png";

const AppStore = () => {
    const bannerImg = {
        backgroundImage: `url(${Banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

        return (
          <>
            <div
              className=" bg-app-banner bg-gray-100 dark:bg-gray-800 text-white py-10"
              style={bannerImg}
            >
              <div className="container">
                <div
                  className="space-y-6 max-w-xl mx-auto"
                >
                  <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold ">
                    Read Books at Your Fingertips
                  </h1>
                  <div className="flex flex-wrap justify-center items-center">
                    <a href="#">
                      <Image
                        src={PlayStoreImg}
                        alt="Play store"
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                      />
                    </a>
                    <a href="#">
                      <Image
                        src={AppStoreImg}
                        alt="App store"
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    
};

export default AppStore;
