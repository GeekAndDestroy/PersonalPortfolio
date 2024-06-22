import React from 'react'

type ProjectsProps = {}

export default function Projects({}: ProjectsProps) {
  return (
    <div className="flex flex-col space-y-16">
            <div className="card lg:card-side bg-base-100 shadow-xl mt-8 w-11/12 self-center">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        alt="Album"
                    />
                </figure>
                <div className="card-body w-2/3">
                    <h2 className="card-title">Lucky Paws Client Portal</h2>
                    <p>This project involved developing a sophisticated client portal for a dog boarding business using React with Typescript, Tailwind CSS, and DaisyUI components. The portal allows clients to manage their profiles and input detailed information about their dogs, such as feeding schedules, medical requirements, and emergency contacts. A PostgreSQL API was built using Flask and SQLAlchemy to handle CRUD operations for client and dog data, including image uploads to Cloudinary. AI capabilities were leveraged for image enhancement and smart cropping to create a visually appealing gallery showcasing each dog's stay. The system enables business owners to send updates to clients directly through the portal.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View Demo</button>
                    </div>
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 self-center">
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
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl w-11/12 self-center">
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
            </div>
        </div>
  )
}