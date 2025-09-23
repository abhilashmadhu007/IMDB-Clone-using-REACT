import React from 'react'

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://4kwallpapers.com/images/wallpapers/mission-impossible-3440x1440-11684.jpg)`,
      }}
    >
      {/* Bottom Transparent Band */}
      <div className="bg-blue-900/60 text-white text-xl text-center w-full">
        Fast and Furious
      </div>
    </div>
  )
}

export default Banner
