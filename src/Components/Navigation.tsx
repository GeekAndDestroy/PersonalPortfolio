import { useState, useEffect } from 'react';
import { themeChange } from 'theme-change'

type Props = {}

export default function Navigation({}: Props) {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  useEffect(() => {
    themeChange(false)
    
  }, [])

  return (
    <div className="navbar bg-base-100 w-full sticky top-0 z-50 h-7 drop-shadow-xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Home</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    {/* <a className="btn btn-ghost text-xl">Jeff Chebul | Full Stack Engineer</a> */}
    
    <svg width="350" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="280 500 1440 395" className="fill-current relative top-5">
<g>
	<path d="M587.21,894.96c-1.33,0-2.56-0.45-3.7-1.35c-1.14-0.9-1.84-2.26-2.08-4.06c-1.56-26.83-10.65-49.53-27.25-68.11
		c-16.6-18.59-37.68-33.62-63.24-45.11c-25.56-11.49-52.72-20-81.47-25.53c-28.75-5.53-56.12-8.66-82.1-9.38l-41.14,0.54
		c-1.8,0-3.22-0.63-4.24-1.89c-1.02-1.26-1.53-2.68-1.53-4.24c0-2.89,1.56-4.69,4.69-5.41c0.96-0.12,2.59-0.18,4.87-0.18l12.81,0.18
		l6.86,0.18c101.16,0.96,204.61,1.62,310.35,1.99c13.11-55.09,25.92-110.25,38.43-165.46l-94.91,147.42
		c-0.84,1.08-1.8,1.62-2.89,1.62c-0.84,0-1.65-0.33-2.44-0.99c-0.78-0.66-1.17-1.47-1.17-2.44c0-0.72,0.18-1.38,0.54-1.99
		L666.6,533.19c1.44-1.8,3.07-2.71,4.87-2.71c1.56,0,2.95,0.51,4.15,1.53c1.2,1.02,1.8,2.38,1.8,4.06c0,0.72-1.02,4.39-3.07,11.01
		l-3.61,12.27c-15.4,57.5-29.83,115.3-43.3,173.4c161.91,0.36,321.78,0.54,479.6,0.54h233.12c0.84,0,1.53,0.27,2.08,0.81
		c0.54,0.54,0.81,1.23,0.81,2.07c0,0.72-0.27,1.38-0.81,1.99c-0.54,0.6-1.23,0.9-2.08,0.9c-61.11-0.12-124.98-0.18-191.62-0.18
		c-172.14,0-346.38,0.24-522.72,0.72c-11.55,50.16-22.55,100.44-33.02,150.84C592.08,893.46,590.22,894.96,587.21,894.96z
		 M587.39,865.19c10.58-41.74,20.93-83.6,31.04-125.58l-68.75,0.18l-155.9,0.9c27.67,4.93,54.67,12.36,81.02,22.28
		c26.34,9.92,49.53,23.21,69.56,39.88C564.39,819.51,578.73,840.29,587.39,865.19z"/>
	<path d="M656.86,729.86c-3.61,0-7.28-2.04-11.01-6.13c-3.37-4.57-5.05-9.92-5.05-16.06c0-6.13,1.17-13.2,3.52-21.2
		c2.35-8,5.44-15,9.29-21.02c3.85-6.01,8-9.02,12.45-9.02c3.49,0,5.95,1.08,7.4,3.25c1.44,2.17,2.17,4.63,2.17,7.4
		c0,3.37-0.78,6.62-2.35,9.74c-5.41,12.27-13.35,22.55-23.82,30.85l-0.72,0.36c0,3.97,0.96,7.58,2.89,10.83
		c1.8,2.05,3.85,3.07,6.13,3.07c1.8,0,3.55-0.6,5.23-1.8c4.33-3.49,8-7.7,11.01-12.63c4.81-7.7,9.26-15.58,13.35-23.64l4.15-8.12
		c0.6-0.84,1.26-1.26,1.98-1.26c0.72,0,1.38,0.24,1.99,0.72c0.6,0.48,0.9,1.08,0.9,1.8c0,0.36-3.61,8.06-10.83,23.1
		c-1.69,3.37-3.97,7.34-6.86,11.91C671.12,723.91,663.84,729.86,656.86,729.86z M651.27,692.51c3.73-4.09,7.16-8.6,10.28-13.53
		c3.13-4.93,4.69-9.14,4.69-12.63v-0.72c-3.01,2.41-5.86,6.13-8.57,11.19C654.97,681.87,652.83,687.1,651.27,692.51z"/>
	<path d="M694.57,770.28c-5.9,0-8.84-7.16-8.84-21.47c0-16.12,3.37-39.39,10.1-69.83l-1.08-0.18c-2.29-0.96-3.43-2.53-3.43-4.69
		c0-0.6,0.21-1.35,0.63-2.26c0.42-0.9,1.32-1.65,2.71-2.26c1.38-0.6,2.68-1.5,3.88-2.71c5.41-22.49,9.68-38.37,12.81-47.63
		l2.35-7.04c2.89-8.9,6.46-18.28,10.74-28.15c4.27-9.86,9.41-17.02,15.43-21.47c1.44-0.84,2.89-1.26,4.33-1.26
		c2.04,0,3.91,0.66,5.59,1.98c1.68,1.33,2.71,3.07,3.07,5.23c0.24,1.2,0.36,2.65,0.36,4.33c0,7.58-2.56,17.86-7.67,30.85
		c-5.11,12.99-11.25,25.74-18.4,38.25c-7.16,12.51-14.05,22.5-20.66,29.95c1.8,0.72,3.31,1.74,4.51,3.07
		c6.25,2.29,12.45,3.43,18.58,3.43c5.65,0,10.76-1.2,15.34-3.61c0.36-0.24,0.78-0.36,1.26-0.36c0.72,0,1.35,0.27,1.89,0.81
		c0.54,0.54,0.81,1.17,0.81,1.89c0,0.72-0.42,1.38-1.26,1.98c-6.62,3.01-13.53,4.51-20.75,4.51c-3.97,0-7.94-0.3-11.91-0.9
		c1.44,4.81,2.17,11.55,2.17,20.21c0,15.64-1.87,30.25-5.59,43.85C707.32,762.46,701.67,770.28,694.57,770.28z M695.48,761.08
		c3.61-4.57,6.56-12.45,8.84-23.64c2.28-11.19,3.43-21.95,3.43-32.3c0-11.55-1.44-19.42-4.33-23.64
		c-4.57,20.81-7.58,40.78-9.02,59.9c0,1.56-0.06,3.13-0.18,4.69c-0.12,1.56-0.18,3.19-0.18,4.87
		C694.03,754.58,694.51,757.95,695.48,761.08z M709.01,655.52c4.09-5.41,8.99-13.2,14.71-23.37c5.71-10.16,10.85-20.72,15.43-31.67
		c4.57-10.94,6.86-19.85,6.86-26.7c0-1.44-0.12-2.68-0.36-3.7c-0.24-1.02-0.72-1.53-1.44-1.53l-0.54,0.18
		c-2.89,1.2-6.31,5.66-10.28,13.35l-0.72,1.44C722.66,606.75,714.78,630.74,709.01,655.52z"/>
	<path d="M747.08,770.28c-5.9,0-8.84-7.16-8.84-21.47c0-16.12,3.37-39.39,10.1-69.83l-1.08-0.18c-2.29-0.96-3.43-2.53-3.43-4.69
		c0-0.6,0.21-1.35,0.63-2.26c0.42-0.9,1.32-1.65,2.71-2.26c1.38-0.6,2.68-1.5,3.88-2.71c5.41-22.49,9.68-38.37,12.81-47.63
		l2.35-7.04c2.89-8.9,6.46-18.28,10.74-28.15c4.27-9.86,9.41-17.02,15.43-21.47c1.44-0.84,2.89-1.26,4.33-1.26
		c2.04,0,3.91,0.66,5.59,1.98c1.68,1.33,2.71,3.07,3.07,5.23c0.24,1.2,0.36,2.65,0.36,4.33c0,7.58-2.56,17.86-7.67,30.85
		c-5.11,12.99-11.25,25.74-18.4,38.25c-7.16,12.51-14.05,22.5-20.66,29.95c1.8,0.72,3.31,1.74,4.51,3.07
		c6.25,2.29,12.45,3.43,18.58,3.43c5.65,0,10.76-1.2,15.34-3.61c0.36-0.24,0.78-0.36,1.26-0.36c0.72,0,1.35,0.27,1.89,0.81
		c0.54,0.54,0.81,1.17,0.81,1.89c0,0.72-0.42,1.38-1.26,1.98c-6.62,3.01-13.53,4.51-20.75,4.51c-3.97,0-7.94-0.3-11.91-0.9
		c1.44,4.81,2.17,11.55,2.17,20.21c0,15.64-1.87,30.25-5.59,43.85C759.83,762.46,754.18,770.28,747.08,770.28z M747.98,761.08
		c3.61-4.57,6.56-12.45,8.84-23.64c2.28-11.19,3.43-21.95,3.43-32.3c0-11.55-1.44-19.42-4.33-23.64
		c-4.57,20.81-7.58,40.78-9.02,59.9c0,1.56-0.06,3.13-0.18,4.69c-0.12,1.56-0.18,3.19-0.18,4.87
		C746.54,754.58,747.02,757.95,747.98,761.08z M761.52,655.52c4.09-5.41,8.99-13.2,14.71-23.37c5.71-10.16,10.85-20.72,15.43-31.67
		c4.57-10.94,6.86-19.85,6.86-26.7c0-1.44-0.12-2.68-0.36-3.7c-0.24-1.02-0.72-1.53-1.44-1.53l-0.54,0.18
		c-2.89,1.2-6.31,5.66-10.28,13.35l-0.72,1.44C775.17,606.75,767.29,630.74,761.52,655.52z"/>
	<path d="M859.94,817.73c-16.84,0-29.23-5.53-37.17-16.6c-5.9-8.42-8.84-17.92-8.84-28.51c1.2-33.08,19.79-71.75,55.76-116.02
		c15.76-19.37,32.06-37.32,48.9-53.86c16.84-16.54,32.12-30.34,45.83-41.41c16.48-13.47,32.42-25.02,47.82-34.64
		c22.97-14.44,41.56-21.65,55.75-21.65c9.74,0,16.42,3.31,20.03,9.92c2.17,4.09,3.25,8.54,3.25,13.35c0,2.29-0.3,4.75-0.9,7.4
		c-3.61,15.4-10.41,30.38-20.39,44.93c-9.99,14.56-20.57,27.37-31.76,38.43c-6.74,6.86-14.25,12.87-22.55,18.04
		c-0.96,0.48-1.99,0.72-3.07,0.72c-1.56,0-2.89-0.6-3.97-1.8c-1.08-1.2-1.62-2.59-1.62-4.15c0-1.8,0.96-3.43,2.89-4.87
		c19.24-12.39,37.23-31.64,53.95-57.74c10.83-17.56,16.24-31.27,16.24-41.14c0-8.3-4.15-12.45-12.45-12.45
		c-6.62,0-16.36,2.95-29.23,8.84c-34.04,17.92-66.94,41.74-98.7,71.45c-31.76,29.71-58.82,60.27-81.2,91.66
		c-4.69,6.5-9.77,14.47-15.25,23.91c-5.48,9.44-10.26,19.46-14.34,30.04c-4.09,10.58-6.13,20.69-6.13,30.31
		c0,12.03,3.85,21.59,11.55,28.69c6.37,5.65,15.52,8.48,27.43,8.48c11.55,0,24.42-2.47,38.61-7.4
		c25.86-9.14,54.79-23.94,86.79-44.39c44.14-28.27,79.75-55.87,106.82-82.82c0.96-0.84,1.86-1.26,2.71-1.26
		c1.2,0,2.08,0.36,2.62,1.08c0.54,0.72,0.81,1.56,0.81,2.53c0,2.17-7.04,9.44-21.11,21.83c-9.26,8.06-20.57,17.26-33.92,27.61
		c-31.16,24.06-61.95,44.39-92.38,60.99C915.27,807.57,884.36,817.73,859.94,817.73z"/>
	<path d="M1088.91,731.31c-0.72,0-1.44-0.18-2.17-0.54c-1.93-1.08-2.89-3.13-2.89-6.13c0-1.08,0.06-2.1,0.18-3.07
		c2.64-16.48,6.07-32.9,10.28-49.26l3.61-14.98c5.53-22.61,11.55-45.11,18.04-67.48c1.2-2.28,2.77-3.43,4.69-3.43
		c1.32,0,2.53,0.42,3.61,1.26c1.08,0.84,1.62,2.05,1.62,3.61c0,0.48-0.12,1.14-0.36,1.99c-8.3,21.53-15.04,43.48-20.21,65.86
		l-1.62,7.4c-2.65,10.95-4.99,22.01-7.04,33.2c0,0.12,0.06,0.18,0.18,0.18h0.18c4.21-7.46,8.54-14.8,12.99-22.01l3.61-5.59
		c3.73-6.5,8.48-12.09,14.25-16.78c1.08-0.6,2.17-0.9,3.25-0.9c2.53,0,4.51,1.33,5.95,3.97c0.72,2.05,1.08,4.33,1.08,6.86
		c0,4.81-1.32,11.85-3.97,21.11l-1.99,8.3l-0.72,3.43c-2.05,7.82-3.07,13.77-3.07,17.86c0,2.29,0.42,4.15,1.26,5.59
		c0.12,0.12,0.3,0.18,0.54,0.18c0.36,0,0.54-0.06,0.54-0.18c3.37-4.69,6.13-9.8,8.3-15.34l3.43-7.04
		c7.34-16.6,11.85-24.9,13.53-24.9c0.6,0,1.2,0.24,1.8,0.72c0.6,0.48,0.9,1.08,0.9,1.8c0,0.36-0.12,0.72-0.36,1.08
		c-2.16,4.45-4.87,10.47-8.12,18.04c-2.89,6.74-5.71,13.08-8.48,19.04c-2.77,5.95-4.84,9.83-6.23,11.64
		c-1.38,1.8-3.1,2.71-5.14,2.71c-0.48,0-0.87-0.06-1.17-0.18c-0.3-0.12-0.51-0.18-0.63-0.18c-4.69-1.68-7.04-6.5-7.04-14.43
		c0-4.21,0.51-8.84,1.53-13.89c1.02-5.05,2.08-10.04,3.16-14.98c2.41-8.54,3.61-15.52,3.61-20.93c-3.61,4.33-6.98,9.14-10.1,14.43
		l-2.17,3.43c-8.66,14.68-16.66,29.83-24,45.47C1092.76,730.28,1091.19,731.31,1088.91,731.31z"/>
	<path d="M1162.35,729.86c-3.61,0-7.28-2.04-11.01-6.13c-3.37-4.57-5.05-9.92-5.05-16.06c0-6.13,1.17-13.2,3.52-21.2
		c2.35-8,5.44-15,9.29-21.02c3.85-6.01,8-9.02,12.45-9.02c3.49,0,5.95,1.08,7.4,3.25c1.44,2.17,2.17,4.63,2.17,7.4
		c0,3.37-0.78,6.62-2.34,9.74c-5.41,12.27-13.35,22.55-23.82,30.85l-0.72,0.36c0,3.97,0.96,7.58,2.89,10.83
		c1.8,2.05,3.85,3.07,6.13,3.07c1.8,0,3.55-0.6,5.23-1.8c4.33-3.49,8-7.7,11.01-12.63c4.81-7.7,9.26-15.58,13.35-23.64l4.15-8.12
		c0.6-0.84,1.26-1.26,1.98-1.26c0.72,0,1.38,0.24,1.98,0.72c0.6,0.48,0.9,1.08,0.9,1.8c0,0.36-3.61,8.06-10.82,23.1
		c-1.69,3.37-3.97,7.34-6.86,11.91C1176.6,723.91,1169.32,729.86,1162.35,729.86z M1156.76,692.51c3.73-4.09,7.15-8.6,10.29-13.53
		c3.13-4.93,4.69-9.14,4.69-12.63v-0.72c-3.01,2.41-5.86,6.13-8.57,11.19C1160.45,681.87,1158.32,687.1,1156.76,692.51z"/>
	<path d="M1217.02,745.92c-1.93,0-3.73-0.72-5.41-2.16c-1.57-2.05-2.41-4.33-2.53-6.86c0-4.93,0.84-9.68,2.53-14.25
		c5.41-14.67,12.93-26.58,22.55-35.73c2.41-2.53,5.11-4.69,8.12-6.5l0.54-3.43l0.18-4.51c0-5.89-1.02-8.84-3.07-8.84
		c-2.41,0-6.02,3.49-10.83,10.47c-10.47,16.12-18.76,33.44-24.9,51.96c-0.96,2.17-2.53,3.25-4.69,3.25c-1.08,0-2.2-0.3-3.34-0.9
		c-1.14-0.6-2.01-1.44-2.62-2.53c-1.56-3.13-2.34-6.5-2.34-10.1c0-2.4,0.18-4.87,0.54-7.4c0.48-5.53,1.2-11.01,2.17-16.42l0.72-3.79
		c4.21-22.97,11.25-52.45,21.11-88.41l5.05-17.68c1.2-2.4,2.77-3.61,4.69-3.61c1.32,0,2.53,0.42,3.61,1.26
		c1.08,0.84,1.62,1.98,1.62,3.43c0,0.6-0.06,1.05-0.18,1.35c-0.12,0.3-0.18,0.51-0.18,0.63c-12.75,34.53-22.01,69.53-27.79,105.01
		l-0.54,3.79c-0.6,4.45-1.08,8.9-1.44,13.35c9.5-22.85,19.49-39.21,29.95-49.08c3.13-2.53,6.19-3.79,9.2-3.79
		c2.53,0,4.81,0.75,6.86,2.26c2.04,1.51,3.46,3.73,4.24,6.68c0.78,2.95,1.17,5.86,1.17,8.75l-0.18,3.79c3.49-1.2,7.04-1.8,10.65-1.8
		c1.44,0,2.91,0.15,4.42,0.45c1.5,0.3,2.26,1.11,2.26,2.44c0,0.6-0.21,1.17-0.63,1.71c-0.42,0.54-1.06,0.81-1.89,0.81h-2.17
		c-4.45,0-8.78,0.96-12.99,2.89l-0.54,0.18c-1.93,11.55-6.38,25.02-13.35,40.42c-4.81,10.71-10.65,18.16-17.5,22.37
		C1219.12,745.74,1218.1,745.92,1217.02,745.92z M1217.2,738.16c3.85-3.01,7.07-7.01,9.65-12c2.59-4.99,4.84-9.89,6.77-14.71
		l1.08-2.89c2.41-6.01,4.33-12.21,5.77-18.58c-10.35,10.1-17.68,22.19-22.01,36.27c-1.08,3.49-1.62,6.86-1.62,10.1
		c0,0.72,0.06,1.32,0.18,1.81H1217.2z"/>
	<path d="M1302.37,729.32c-3.25,0-5.77-1.26-7.58-3.79c-3.25-4.33-4.87-11.79-4.87-22.37c0-2.53,0.12-5.11,0.36-7.76l-0.18-0.18
		l-8.12,16.24c-0.96,1.69-1.81,3.37-2.53,5.05c-1.81,4.45-4.39,8.36-7.76,11.73c-1.08,0.72-2.17,1.08-3.25,1.08
		c-2.17,0-4.03-0.78-5.59-2.35c-3.37-4.57-5.05-10.34-5.05-17.32c0-9.26,2.1-20.39,6.32-33.38c1.8-5.65,4.21-11.13,7.22-16.42
		c1.32-1.68,2.76-2.53,4.33-2.53c1.32,0,2.53,0.48,3.61,1.44c1.08,0.96,1.62,2.11,1.62,3.43c0,0.84-0.24,1.69-0.72,2.53
		c-3.13,6.13-5.95,13.59-8.48,22.37c-2.53,8.78-3.79,16.96-3.79,24.54c0,2.65,0.18,5.11,0.54,7.4c4.33-6.13,8-12.75,11.01-19.85
		l8.48-18.22c2.89-6.61,6.01-13.23,9.38-19.85c1.2-1.56,2.59-2.35,4.15-2.35c1.32,0,2.53,0.45,3.61,1.35
		c1.08,0.9,1.62,2.08,1.62,3.52c0,0.48-0.12,1.02-0.36,1.62c-1.33,3.97-3.01,10.32-5.05,19.04c-2.05,8.72-3.07,16.75-3.07,24.09
		c0,7.1,1.38,11.61,4.15,13.53c3.37-2.28,6.7-6.86,10.01-13.71c3.31-6.86,6.34-13.77,9.11-20.75c1.92-4.81,3.55-8.66,4.87-11.55
		c0.36-0.96,1.08-1.44,2.17-1.44c0.72,0,1.35,0.21,1.89,0.63c0.54,0.42,0.81,0.99,0.81,1.71l-0.18,1.08
		c-1.2,2.65-2.65,6.38-4.33,11.19c-2.77,8.66-6.23,17.32-10.37,25.98C1312.2,723.73,1307.54,728.48,1302.37,729.32z"/>
	<path d="M1707.62,660.21c-11.91-10.1-25.92-17.65-42.04-22.64c-16.12-4.99-31.75-8.87-46.91-11.64
		c-38.98-6.86-78.25-11.37-117.83-13.53c-40.66-2.28-85.04-3.61-133.16-3.97l-14.61-0.18c6.01-18.16,11.3-32.72,15.88-43.67
		c0.23-0.72,0.36-1.44,0.36-2.16c0-1.45-0.52-2.62-1.54-3.52c-1.02-0.9-2.19-1.35-3.52-1.35c-1.8,0-3.31,1.02-4.51,3.06
		c-6.01,14.8-11.3,29.84-15.87,45.11l-0.73,2.53c-31.51-0.24-76.38-0.42-134.6-0.54l-53.41-0.18c-1.2,0-2.22,0.42-3.07,1.26
		c-0.84,0.84-1.26,1.87-1.26,3.07s0.42,2.22,1.26,3.06c0.85,0.85,1.87,1.27,3.07,1.27l94.01-1.08c31.27,0,61.89,0.06,91.84,0.18
		c-3.25,11.06-6.5,23.48-9.75,37.26c-3.24,13.77-6.01,28.17-8.3,43.21c-2.28,15.04-3.42,29.83-3.42,44.39c0,2.6,0.04,5.15,0.14,7.65
		h8.07c-0.07-1.93-0.1-3.88-0.1-5.85c0-35.48,7.7-77.7,23.1-126.66l15.88,0.18c42.1,0.24,78.85,1.02,110.25,2.34
		c47.03,1.93,89.31,5.96,126.84,12.09c29.35,4.69,53.59,11.01,72.72,18.95c24.29,9.98,36.45,22.13,36.45,36.44
		c0,14.56-13.06,31.16-39.16,49.81c-22.37,15.39-50.16,30.1-83.36,44.11c-33.2,14.01-67.51,25.56-102.94,34.65
		c-35.43,9.08-66.79,13.62-94.1,13.62l-6.67-0.18c-14.8-0.97-26.5-5.3-35.1-12.99c-7-6.28-12.38-14.18-16.1-23.69h-8.28
		c5.22,14.18,13.14,25.14,23.75,32.89c6.38,4.45,13.23,7.46,20.57,9.02c7.34,1.56,14.8,2.35,22.38,2.35
		c5.65,0,11.12-0.25,16.42-0.73c15.99-1.2,31.75-3.49,47.27-6.85c46.67-9.87,91.96-24,135.87-42.41
		c29.59-11.78,57.56-26.64,83.9-44.56c6.37-4.21,12.78-9.27,19.22-15.16c6.43-5.89,11.87-12.3,16.33-19.21
		c4.44-6.92,6.67-13.99,6.67-21.21C1719.53,675.85,1715.56,667.67,1707.62,660.21z M1143.67,609.06c-0.66-0.9-1.71-1.35-3.15-1.35
		h-7.58c-1.2,0-2.23,0.42-3.07,1.26c-0.84,0.84-1.26,1.87-1.26,3.07s0.42,2.22,1.26,3.07c0.84,0.84,1.87,1.26,3.07,1.26h7.58
		c2.76-0.24,4.15-1.68,4.15-4.33C1144.67,610.96,1144.34,609.96,1143.67,609.06z"/>
	<g>
		<path d="M1027.37,783.26h-4v-27.97h19.74v3.48h-15.74V783.26z M1026.97,768.52h14.42v3.44h-14.42V768.52z"/>
		<path d="M1064.33,783.58c-3.68,0-6.57-1.05-8.67-3.16c-2.1-2.1-3.16-5.18-3.16-9.23v-15.9h4v15.74c0,3.12,0.69,5.39,2.06,6.83
			s3.31,2.16,5.81,2.16c2.53,0,4.48-0.72,5.85-2.16c1.37-1.44,2.06-3.72,2.06-6.83v-15.74h3.88v15.9c0,4.05-1.05,7.13-3.14,9.23
			C1070.93,782.53,1068.03,783.58,1064.33,783.58z"/>
		<path d="M1088.34,783.26v-27.97h4v24.49h15.14v3.48H1088.34z"/>
		<path d="M1116.07,783.26v-27.97h4v24.49h15.14v3.48H1116.07z"/>
		<path d="M1166.7,783.58c-2.13,0-4.17-0.33-6.11-0.98c-1.94-0.65-3.48-1.5-4.59-2.54l1.48-3.12c1.07,0.93,2.42,1.71,4.08,2.32
			c1.65,0.61,3.37,0.92,5.15,0.92c1.62,0,2.94-0.19,3.96-0.56c1.01-0.37,1.76-0.89,2.24-1.54c0.48-0.65,0.72-1.39,0.72-2.22
			c0-0.96-0.31-1.73-0.94-2.32c-0.63-0.59-1.44-1.06-2.44-1.42c-1-0.36-2.1-0.67-3.3-0.94c-1.2-0.27-2.4-0.58-3.62-0.94
			c-1.21-0.36-2.32-0.82-3.32-1.38s-1.81-1.31-2.42-2.26c-0.61-0.95-0.92-2.16-0.92-3.66c0-1.44,0.38-2.76,1.14-3.98
			c0.76-1.21,1.93-2.18,3.52-2.92c1.58-0.73,3.6-1.1,6.05-1.1c1.62,0,3.24,0.21,4.83,0.64c1.6,0.43,2.98,1.04,4.16,1.84l-1.32,3.2
			c-1.2-0.8-2.46-1.38-3.8-1.74c-1.33-0.36-2.62-0.54-3.88-0.54c-1.57,0-2.86,0.2-3.88,0.6c-1.01,0.4-1.75,0.93-2.22,1.6
			c-0.47,0.67-0.7,1.41-0.7,2.24c0,0.99,0.31,1.77,0.94,2.36c0.63,0.59,1.44,1.05,2.44,1.4c1,0.35,2.1,0.66,3.3,0.94
			s2.4,0.59,3.62,0.94c1.21,0.35,2.32,0.8,3.32,1.36c1,0.56,1.8,1.31,2.42,2.24c0.61,0.93,0.92,2.13,0.92,3.6
			c0,1.41-0.39,2.72-1.16,3.94c-0.77,1.21-1.96,2.18-3.58,2.92C1171.18,783.22,1169.15,783.58,1166.7,783.58z"/>
		<path d="M1192.51,783.26v-24.49h-9.59v-3.48h23.13v3.48h-9.59v24.49H1192.51z"/>
		<path d="M1208.77,783.26l12.67-27.97h3.96l12.71,27.97h-4.2l-11.31-25.73h1.6l-11.31,25.73H1208.77z M1214.16,776.27l1.08-3.2
			h15.74l1.16,3.2H1214.16z"/>
		<path d="M1258.36,783.58c-2.13,0-4.1-0.35-5.89-1.06c-1.8-0.71-3.36-1.7-4.67-3c-1.32-1.29-2.35-2.8-3.1-4.53
			c-0.75-1.73-1.12-3.64-1.12-5.71c0-2.08,0.37-3.98,1.12-5.71c0.75-1.73,1.78-3.24,3.12-4.53c1.33-1.29,2.9-2.29,4.69-3
			c1.8-0.71,3.76-1.06,5.89-1.06c2.16,0,4.15,0.37,5.97,1.1c1.82,0.73,3.38,1.82,4.66,3.26l-2.6,2.52c-1.07-1.12-2.26-1.95-3.6-2.5
			c-1.33-0.55-2.76-0.82-4.28-0.82c-1.57,0-3.03,0.27-4.38,0.8c-1.35,0.53-2.51,1.28-3.5,2.24c-0.99,0.96-1.75,2.1-2.3,3.42
			c-0.55,1.32-0.82,2.75-0.82,4.3c0,1.55,0.27,2.98,0.82,4.3c0.55,1.32,1.31,2.46,2.3,3.42c0.99,0.96,2.15,1.7,3.5,2.24
			c1.34,0.53,2.8,0.8,4.38,0.8c1.52,0,2.94-0.27,4.28-0.82c1.33-0.55,2.53-1.39,3.6-2.54l2.6,2.52c-1.28,1.44-2.83,2.53-4.66,3.28
			C1262.54,783.21,1260.54,783.58,1258.36,783.58z"/>
		<path d="M1278.73,783.26v-27.97h4v27.97H1278.73z M1282.25,776.51l-0.2-4.87l15.86-16.34h4.56l-12.27,12.95l-2.24,2.48
			L1282.25,776.51z M1298.55,783.26l-11.47-13.35l2.68-2.96l13.47,16.3H1298.55z"/>
		<path d="M1330.2,779.79h16.3v3.48h-20.3v-27.97h19.74v3.48h-15.74V779.79z M1329.84,767.36h14.38v3.4h-14.38V767.36z"/>
		<path d="M1356.97,783.26v-27.97h3.28l18.5,22.97h-1.72v-22.97h4v27.97h-3.28l-18.5-22.97h1.72v22.97H1356.97z"/>
		<path d="M1406.03,783.58c-2.16,0-4.14-0.35-5.95-1.06c-1.81-0.71-3.38-1.7-4.71-3c-1.33-1.29-2.37-2.8-3.12-4.53
			c-0.75-1.73-1.12-3.64-1.12-5.71c0-2.08,0.37-3.98,1.12-5.71c0.75-1.73,1.79-3.24,3.14-4.53c1.34-1.29,2.92-2.29,4.73-3
			c1.81-0.71,3.81-1.06,5.99-1.06c2.21,0,4.24,0.36,6.07,1.08s3.4,1.8,4.67,3.24l-2.48,2.48c-1.15-1.12-2.39-1.94-3.74-2.46
			c-1.34-0.52-2.8-0.78-4.38-0.78c-1.6,0-3.08,0.27-4.46,0.8c-1.37,0.53-2.56,1.28-3.56,2.24c-1,0.96-1.77,2.1-2.32,3.42
			c-0.55,1.32-0.82,2.75-0.82,4.3c0,1.52,0.27,2.94,0.82,4.26c0.55,1.32,1.32,2.46,2.32,3.44c1,0.97,2.18,1.72,3.54,2.26
			c1.36,0.53,2.84,0.8,4.43,0.8c1.49,0,2.92-0.23,4.3-0.7c1.37-0.47,2.64-1.25,3.82-2.34l2.28,3.04c-1.39,1.17-3,2.06-4.85,2.66
			C1409.91,783.28,1408,783.58,1406.03,783.58z M1412.79,779.51v-10.39h3.84v10.91L1412.79,779.51z"/>
		<path d="M1428.25,783.26v-27.97h3.99v27.97H1428.25z"/>
		<path d="M1444.63,783.26v-27.97h3.28l18.5,22.97h-1.72v-22.97h4v27.97h-3.28l-18.5-22.97h1.72v22.97H1444.63z"/>
		<path d="M1485.06,779.79h16.3v3.48h-20.3v-27.97h19.74v3.48h-15.74V779.79z M1484.71,767.36h14.38v3.4h-14.38V767.36z"/>
		<path d="M1515.83,779.79h16.3v3.48h-20.3v-27.97h19.74v3.48h-15.74V779.79z M1515.47,767.36h14.38v3.4h-14.38V767.36z"/>
		<path d="M1542.6,783.26v-27.97h10.91c2.45,0,4.54,0.39,6.27,1.16c1.73,0.77,3.06,1.89,4,3.36c0.93,1.47,1.4,3.21,1.4,5.23
			c0,2.02-0.47,3.76-1.4,5.21c-0.93,1.45-2.26,2.56-4,3.34c-1.73,0.77-3.82,1.16-6.27,1.16h-8.71l1.8-1.84v10.35H1542.6z
			 M1546.6,773.32l-1.8-1.96h8.59c2.56,0,4.49-0.55,5.81-1.66c1.32-1.1,1.98-2.66,1.98-4.65c0-2-0.66-3.54-1.98-4.63
			c-1.32-1.09-3.26-1.64-5.81-1.64h-8.59l1.8-2V773.32z M1561.3,783.26l-7.11-10.15h4.28l7.19,10.15H1561.3z"/>
	</g>
</g>
</svg>


  </div>
  <div className="navbar-end">
  {/* <label className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52" data-key="" htmlFor="theme">Theme: */}
      <select data-choose-theme className='dropdown dropdown-end dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-30' id="theme">
          <option value="dark">Dark</option>
          <option value="dracula">Dracula</option>
          <option value="halloween">Halloween</option>
          <option value="light">Light</option>
          <option value="cyberpunk">Cyberpunk</option>
          <option value="acid">Acid</option>
      </select>
  {/* </label> */}
  {/* 'text-accent dropdown dropdown-end' */}
  {/* <div className="dropdown mr-28">
  <div tabIndex={0} role="button" className="btn m-1">
    Theme
    <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dracula" value="dracula"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Halloween" value="halloween"/></li>
    <div className="divider"></div> 
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="light"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
    <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Acid" value="acid"/></li>
  </ul>
</div> */}
  </div>
</div>
  )
}