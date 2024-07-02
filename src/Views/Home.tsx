import { useState, useEffect } from "react";


type HomeProps = {}

export default function Home({}: HomeProps) {

      // Define the array of image URLs
      const images: string[] = [
        "../../src/assets/images/headshot/headshot01.jpg",
        "../../src/assets/images/headshot/headshot03.jpg",
        // "../../src/assets/images/headshot/headshot04.jpg",
        "../../src/assets/images/headshot/headshot05.jpg",
        "../../src/assets/images/headshot/headshot07.jpg",
        "../../src/assets/images/headshot/headshot08.jpg",
        // "../../src/assets/images/headshot/headshot09.jpg",
        "../../src/assets/images/headshot/headshot10.jpg",
        "../../src/assets/images/headshot/headshot12.jpg",
        "../../src/assets/images/headshot/headshot13.jpg",
        "../../src/assets/images/headshot/headshot14.jpg",
        "../../src/assets/images/headshot/headshot15.jpg",
        "../../src/assets/images/headshot/headshot16.jpg",
        "../../src/assets/images/headshot/headshot18.jpg",
        "../../src/assets/images/headshot/headshot19.jpg",
        // "../../src/assets/images/headshot/headshot20.jpg",
        // "../../src/assets/images/headshot/headshot21.jpg",
        "../../src/assets/images/headshot/headshot22.jpg",
        "../../src/assets/images/headshot/headshot25.jpg",
        "../../src/assets/images/headshot/headshot26.jpg",
        "../../src/assets/images/headshot/headshot27.jpg",
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
    <div className="hero min-h-dvh bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    {/* <img src="../../src/assets/images/headshot/headshot01.jpg" className="max-w-sm rounded-lg shadow-2xl" /> */}
    {/* <div className="size-fit"><Headshot /></div> */}
    
    <img id="myPicture" src={currentImage} style={{height:576, width:384}} alt="Random Headshot" />
    
    <div className="ml-6">
      
      <h1 className="text-5xl font-bold">WELCOME!</h1>
      <p className="py-6">Jeff Chebul is a full stack engineer with a knack for front end development, enjoying the challenge of turning design ideas into smooth user experiences. Jeff excels at solving problems, managing multiple projects, and building strong client relationships. He is also passionate about animal welfare and mental health advocacy. Quick to learn new languages and technologies, Jeff consistently aims to deliver innovative solutions.</p>
      {/* <p className="py-6">Hi, I'm Jeff Chebul! As a full stack engineer with a knack for front end development, I enjoy turning design ideas into smooth user experiences. I excel at solving problems, managing multiple projects, and building great client relationships. I’m also passionate about animal welfare and mental health advocacy. I’m quick to learn new languages and tech, always aiming to deliver innovative solutions.</p> */}
      {/* <button className="btn btn-primary">Get Started</button> */}
      
    </div>
  </div>
</div>
  )
}