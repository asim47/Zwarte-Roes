import { useEffect, useState } from "react";

export const useMobTabWeb = () => {

    const [IsWeb, setIsWeb] = useState(window.innerWidth >= 1024);
    const [IsTab, setIsTab] = useState(window.innerWidth < 1024 && window.innerWidth >= 768);
    const [IsMob, setIsMob] = useState(window.innerWidth < 768);

    useEffect(() => {

        window.addEventListener("resize", () => {
            setIsWeb(window.innerWidth >= 1024);
            setIsTab(window.innerWidth < 1024 && window.innerWidth >= 768);
            setIsMob(window.innerWidth < 768);
        });
    }, []);

    return { IsWeb, IsTab, IsMob };

};