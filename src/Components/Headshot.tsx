import { useState, useEffect } from "react";

type Props = {};

export default function Headshot({}: Props) {
    // Define the array of image URLs
    const images: string[] = [
        "../../src/assets/images/headshot/headshot01.jpg",
        "../../src/assets/images/headshot/headshot02.jpg",
        "../../src/assets/images/headshot/headshot03.jpg",
        "../../src/assets/images/headshot/headshot04.jpg",
        "../../src/assets/images/headshot/headshot05.jpg",
        "../../src/assets/images/headshot/headshot06.jpg",
        "../../src/assets/images/headshot/headshot07.jpg",
        "../../src/assets/images/headshot/headshot08.jpg",
        "../../src/assets/images/headshot/headshot09.jpg",
        "../../src/assets/images/headshot/headshot10.jpg",
        "../../src/assets/images/headshot/headshot11.jpg",
        "../../src/assets/images/headshot/headshot12.jpg",
        "../../src/assets/images/headshot/headshot13.jpg",
        "../../src/assets/images/headshot/headshot14.jpg",
        "../../src/assets/images/headshot/headshot15.jpg",
        "../../src/assets/images/headshot/headshot16.jpg",
        "../../src/assets/images/headshot/headshot18.jpg",
        "../../src/assets/images/headshot/headshot19.jpg",
        "../../src/assets/images/headshot/headshot20.jpg",
        "../../src/assets/images/headshot/headshot21.jpg",
        "../../src/assets/images/headshot/headshot22.jpg",
        "../../src/assets/images/headshot/headshot23.jpg",
        "../../src/assets/images/headshot/headshot24.jpg",
        "../../src/assets/images/headshot/headshot26.jpg",
        "../../src/assets/images/headshot/headshot27.jpg",
        "../../src/assets/images/headshot/headshot29.jpg",
        "../../src/assets/images/headshot/headshot30.jpg",
    ];

    // State to hold the currently selected image
    const [currentImage, setCurrentImage] = useState<string>("");

    // Function to choose a random image
    const choosePic = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        setCurrentImage(images[randomIndex]);
    };

    // useEffect to run choosePic once on component mount
    useEffect(() => {
        choosePic();
    }, []);

    return (
    <img id="myPicture" src={currentImage}  alt="Random Headshot" />
    );
}
