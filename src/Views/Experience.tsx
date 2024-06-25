import { Link } from "react-router-dom";

type ExperienceProps = {};

export default function Experience({}: ExperienceProps) {
    return (
        <div className="flex py-8">
        <div className="justify-center w-2/3 mx-auto">
            <div className="divider divider-primary w-10/12 mx-auto mt-20 mb-12">
                Experience
            </div>

            <div className="card bg-neutral text-neutral-content object-center">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>

            <div className="divider divider-primary w-10/12 mx-auto mt-12 mb-12">
                Skills
            </div>

            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>

            <div className="divider divider-primary w-10/12 mx-auto mt-12 mb-12">
                Education
            </div>

            <div className="card bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cookies!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        
                    </div>
                </div>
            </div>
            <div className="flex my-8 justify-end">
                <Link to="../../src/assets/resume/Jeff-Chebul-Resume.pdf" target="_blank">
                    <button className="btn btn-primary"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-current"><path d="M16.965 2.381c3.593 1.946 6.035 5.749 6.035 10.119 0 6.347-5.153 11.5-11.5 11.5s-11.5-5.153-11.5-11.5c0-4.37 2.442-8.173 6.035-10.119l.608.809c-3.353 1.755-5.643 5.267-5.643 9.31 0 5.795 4.705 10.5 10.5 10.5s10.5-4.705 10.5-10.5c0-4.043-2.29-7.555-5.643-9.31l.608-.809zm-4.965-2.381v14.826l3.747-4.604.753.666-5 6.112-5-6.101.737-.679 3.763 4.608v-14.828h1z"/></svg>Download Resume</button>
                </Link>
            </div>
        </div>
        </div>
    );
}
