import React from 'react'

const About = () => {
  return (
<section className="text-white my-container flex flex-col gap-8 py-8 gradient-bg">

  <div>
  <h3 className="text-2xl font-semibold text-center">ABOUT</h3>
  <p>Introducing AniZone: Your Gateway to Anime Paradise!

AniZone is not just another anime streaming website; it&apos;s an immersive experience designed to transport you into the captivating worlds of your favorite anime series. Dive into a vast library of handpicked titles spanning all genres, from heart-pounding action to heartwarming slice-of-life stories and everything in between.</p>
  </div>
  
  <div className="flex flex-col gap-2">
  <h3 className="text-2xl font-semibold text-center">SCOPE</h3>
  <p>
    AniZone aims to be the ultimate destination for anime enthusiasts, providing a comprehensive platform to stream their favorite shows, discover new gems, and connect with a vibrant community of fellow fans
  </p>

  <ol className="list-decimal flex flex-col gap-4">
    <li>
      <span className="font-semibold">Extensive Library:</span> boasts a vast and diverse library of anime titles spanning across various genres, including action, adventure, romance, fantasy, sci-fi, and more. From classic series to the latest releases, we aim to cater to every taste and preference.</li>
    <li>
      <span className="font-semibold">High-Quality Streaming:</span> We prioritize the viewing experience of our users by offering high-definition streaming with smooth playback and minimal buffering. Our platform ensures that viewers can immerse themselves fully in the captivating worlds of anime without any technical interruptions.</li>
    <li>
      <span className="font-semibold">User-Friendly Interface:</span> An intuitive and user-friendly interface makes navigating through AniZone effortless. Users can easily search for their favorite shows, explore recommendations based on their preferences, and create personalized watchlists for a seamless viewing experience.
    </li>

  </ol>
  </div>


</section>
  )
}

export default About