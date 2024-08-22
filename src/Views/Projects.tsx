import { Link } from "react-router-dom";


type ProjectsProps = {};

export default function Projects({}: ProjectsProps) {
    return (
        <div className="flex flex-col space-y-16 py-8">
            <div className="card lg:card-side bg-base-100 shadow-xl mt-8 w-11/12 self-center">
                <figure className="min-w-min">
                    {/* <img
                        src="../../src/assets/images/projects/luckypaws/1717421535582.jpg"
                        alt="Lucky Paws"
                        // width={80%} height={250}
                        style={{height:350}}
                    /> */}
                    {/* <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        alt="Album"
                    /> */}
                    {/* <div className="carousel w-auto">
                        <div
                            id="slide1"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="../../src/assets/images/projects/luckypaws/1717421535582.jpg"
                                className="w-full"
                            />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide2"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                                className="w-full"
                            />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide3"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                                className="w-full"
                            />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide4" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div
                            id="slide4"
                            className="carousel-item relative w-full"
                        >
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                                className="w-full"
                            />
                            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide1" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div> */}
                    <div className="carousel carousel-center">
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/logo.png"
                                alt="Logo"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/login.png"
                                alt="Login Page"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/home.png"
                                alt="Home Page"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/profile.png"
                                alt="Profile Page"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/admin_client.png"
                                alt="Admin Page - Clients"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/admin_dogs.png"
                                alt="Admin Page - Dogs"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/client_information.png"
                                alt="Client Information Page"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/dog_information.png"
                                alt="Dog Information Page"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/light_mode.png"
                                alt="Light Mode"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/picture_view.png"
                                alt="Picture View"
                                style={{height:550}}
                            />
                        </div>
                        <div className="carousel-item pr-1">
                            <img
                                src="../assets/images/projects/luckypaws/update.png"
                                alt="Update Page"
                                style={{height:550}}
                            />
                        </div>
                    </div>
                </figure>
                <div className="card-body min-w-2/3">
                    <h2 className="card-title">Lucky Paws Client Portal</h2>
                    <p>
                        This project involved developing a client portal for a dog boarding business using React with Typescript, Tailwind CSS, and DaisyUI components. The portal allows clients to manage their profiles and input detailed information about their dogs, such as feeding schedules, medical requirements, and emergency contacts. A PostgreSQL API was built using Flask and SQLAlchemy to handle CRUD operations for client and dog data, including image uploads to Cloudinary. AI capabilities were leveraged for image enhancement and smart cropping to create a visually appealing gallery showcasing each dog's stay. The system enables business owners to send updates to clients directly through the portal.
                    </p>
                    <ul>
                    <li>Login:</li>
                    <li>email: jmchebul@jmchebul.com</li>
                    <li>password: abc123</li>
                    </ul>
                    <p>*database may need a few minutes to spin up if inactive</p>
                    <div className="card-actions justify-end">
                        <Link 
                            to="https://luckypawscp.netlify.app/"
                            target="_blank">
                            <button className="btn btn-primary">View Demo</button>
                        </Link>
                        <Link
                            to="https://github.com/GeekAndDestroy/LuckyPaws_ClientPortal"
                            target="_blank"
                        >
                            <button className="btn btn-primary" type="button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                                </svg>{" "}
                                Front End{" "}
                            </button>
                        </Link>
                        <Link
                            to="https://github.com/GeekAndDestroy/LuckyPaws-DB"
                            target="_blank"
                        >
                            <button className="btn btn-primary" type="button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                                </svg>{" "}
                                Back End{" "}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-8 w-11/12 self-center">
                <figure className="min-w-1/3">
                    <img
                        src="src/assets/images/projects/spork/dashboard.jpg"
                        alt="Album"
                    />
                </figure>
                <div className="card-body min-w-2/3">
                    <h2 className="card-title">Spork (work in progress)</h2>
                    <p>
                        Spork is a team project developed for Co.Lab, designed to assist individuals with chronic illnesses in managing their daily energy expenditure. While the initial concept was my own, I collaborated with a product manager, designer, and back-end developers to build this web application. Spoon Tracker enables users to track their activities based on the{" "} <a href="https://en.wikipedia.org/wiki/Spoon_theory" target="_blank"> "spoon theory,"</a>{" "} predict their energy limits, and share insights through visually compelling reports. By providing a clear view of energy usage patterns, Spoon Tracker helps users make informed decisions and enhances understanding and empathy from those around them.
                    </p>
                    <p>*database may need a few minutes to spin up if inactive</p>

                    <div className="card-actions justify-end">
                        <Link
                            to="https://sporkapp.netlify.app"
                            target="_blank"
                        >
                            <button className="btn btn-primary">View App</button>
                        </Link>
                        <Link
                            to="https://github.com/GeekAndDestroy/SpoonTracker"
                            target="_blank"
                        >
                            <button className="btn btn-primary" type="button">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="fill-current"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                                </svg>{" "}
                                Front End{" "}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 self-center mb-36">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        alt="Album"
                    />
                </figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title">Lucky Paws Client Portal</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
