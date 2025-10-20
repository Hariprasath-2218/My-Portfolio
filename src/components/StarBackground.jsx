import { useEffect, useState } from "react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = ({ isDarkMode }) => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [suns, setSuns] = useState([]);
    const [clouds, setClouds] = useState([]);

    useEffect(() => {
        generateStars();
        generateMeteors();
        generateSuns();
        generateClouds();

        const handleResize = () => {
            generateStars();
            generateSuns();
        };

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, []);

     const generateStars = () => {
         const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
         );
         const newStars = []

         for (let i = 0; i < numberOfStars; i++){
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,//create a stars of size between 1 and 4px
                 x: Math.random() * 100,// in viewport the Stars are located at random 0 to 100% at random x-axis
                 y: Math.random() * 100,// in viewport the Stars are located at random 0 to 100% at random y-axis
                 opacity: Math.random() * 0.5 + 0.5,//opacity between 50% to 100% opacity
                 animationDuration: Math.random() * 4 + 2,
            });
         }

        setStars(newStars);
    };

    const generateSuns = () => {
        const numberOfSuns = 1
        const newSuns = []

        for (let i = 0; i < numberOfSuns; i++) {
            newSuns.push({
                id: i,
                size: Math.random() * 100 + 1,//create a stars of size between 1 and 4px
                x: Math.random() * 100,// in viewport the Stars are located at random 0 to 100% at random x-axis
                y: Math.random() * 100,// in viewport the Stars are located at random 0 to 100% at random y-axis
                opacity: Math.random() * 0.5 + 0.5,//opacity between 50% to 100% opacity
                animationDuration: Math.random() * 4 + 2,
            });
        }

        setSuns(newSuns);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,//create a stars of size between 1 and 3px
                x: Math.random() * 80,// in viewport the Stars are located at random 0 to 100% at random x-axis
                y: Math.random() * 50,// in viewport the Stars are located at random 0 to 20% at random y-axis
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3, // between 20s and 40s
            });
        }

        setMeteors(newMeteors);
    };

    const generateClouds = () => {
        const numberOfClouds = 5;
        const newClouds = [];

        for (let i = 0; i < numberOfClouds; i++) {
            newClouds.push({
                id: i,
                size: Math.random() * 2 + 1,//create a stars of size between 1 and 3px
                x: Math.random() * 80,// in viewport the Stars are located at random 0 to 100% at random x-axis
                y: Math.random() * 50,// in viewport the Stars are located at random 0 to 20% at random y-axis
                delay: Math.random() * 100,
                animationDuration: Math.random() * 20 + 10, // between 20s and 40s
            });
        }

        setClouds(newClouds);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {isDarkMode && (
            <>
            {stars.map((star) => (
                <div 
                  key={star.id} 
                  className="star animate-pulse-subtle" 
                  style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",//s means seconds
                }}/>
            ))}

            {meteors.map((meteor) => (
                <div 
                key={meteor.id} 
                className="meteor animate-meteor" 
                style={{
                    width: meteor.size * 50 + "px",
                    height: meteor.size * 2 + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",//s means seconds
                    // transformOrigin: "left center",
                }}/>
            ))}
            </>
            )}
            {!isDarkMode && (
            <>
            {suns.map((sun) => (
                <div>
                    <img src="/sun.png"
                        key={sun.id}
                        className="star animate-pulse-subtle w-[100px] h-[100px] md:w-[200px] md:h-[200px]"
                        style={{
                            left: sun.x + "%",
                            top: "20%",
                            opacity: sun.opacity,
                            animationDuration: sun.animationDuration + "s",
                        }}
                    />
                </div>
            ))}
            {clouds.map((cloud) => (
                <img
                    src="/cloud.gif"
                    key={cloud.id}
                    className="absolute rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px] opacity-80"
                    style={{
                        left: cloud.x + "%",
                        top: cloud.y + "%",
                        animationName: "cloud-drift",
                        animationDuration: cloud.animationDuration + "s",
                        animationTimingFunction: "linear",
                        animationIterationCount: "infinite",
                        animationDelay: cloud.delay,
                        boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                    }}
                />
            ))}
            </>
        )}
        </div>
    );
};