import React from 'react'

type HomeProps = {}

export default function Home({}: HomeProps) {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">WELCOME!</h1>
      <p className="py-6">Jeff Chebul is a dedicated full stack engineer with a focus on front end development, adept at translating design concepts into seamless user experiences. Skilled in analytical problem-solving and adept at managing multiple tasks while fostering strong client relationships. Passionate about animal welfare and a vocal advocate for mental health awareness. Proven ability to prioritize tasks effectively and adapt to evolving project requirements. Quick to grasp new languages and technologies, consistently expanding skill sets to deliver innovative solutions.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}