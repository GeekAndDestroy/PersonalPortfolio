import React from 'react'

type HomeProps = {}

export default function Home({}: HomeProps) {
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">WELCOME!</h1>
      <p className="py-6">Hi, I'm Jeff Chebul! As a full stack engineer with a knack for front end development, I enjoy turning design ideas into smooth user experiences. I excel at solving problems, managing multiple projects, and building great client relationships. I’m also passionate about animal welfare and mental health advocacy. I’m quick to learn new languages and tech, always aiming to deliver innovative solutions.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  )
}