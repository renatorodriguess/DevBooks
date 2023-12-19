import React from "react";
import Image from "next/image";
import PlayStoreImg from '../../../assets/website/play_store.png';
import AppStoreImg from '../../../assets/website/app_store.png';

const AppStore = () => {
    const bannerStyle = {
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
    };

    return (
        <div className="bg-appstore-banner bg-gray-100 dark:bg-gray-800 text-white py-10" style={bannerStyle}>
            <div className="container">
                <div className="space-y-6 max-w-xl mx-auto">
                    <h1 className="text-2xl text-center sm:text-4xl font-semibold">Leia Livros Em Todos os Lugares</h1>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <a href="#">
                            <div className="max-w-p[150px] sm:max-w-[120px] md:max-w-[200px]">
                                <Image
                                    src={PlayStoreImg}
                                    alt="PlayStoreImg"
                                    layout="responsive"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </a>
                        <a href="#">
                            <div className="max-w-p[150px] sm:max-w-[120px] md:max-w-[200px]">
                                <Image
                                    src={AppStoreImg}
                                    alt="AppStoreImg"
                                    layout="responsive"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStore;
