import React from 'react';
import "../Gallery/Gallery.scss";

import Moments from "../Moments/Moments";
import LifeContent from "../LifeContent/LifeContent";

import { ReactComponent as Lifeflower } from "../../Assets/Images/Lifeflower.svg";
import { ReactComponent as Heartflower } from "../../Assets/Images/Heartflower.svg";



import { Image } from "../../Assets/Image";



export default function Gallery() {
  return (
    <section className='GalleryPart'>
      <div className='container'>
        <div className='gallery-wrapper'>
          <div className='gallery-left'>
            <div className='moments-img'>
              <Moments
                lifeimg={<img src={Image.Lifeimg} alt="Winner_img" />}
                lifeflowershape={<Lifeflower />}
                className={"life_flower"}
              />
            </div>
            <div className='galleryleft-content'>
              <LifeContent
              lifepara_first="Because when everything else in our lives becomes blurry, the things and people that truly matter come into sharp focus."
              Lifepara_second="Let’s celebrate the every-day moments that came into focus over the last year. For though we may be apart, we can all find meaning in our shared frame-worthy from home experiences."
              />
            </div>
            <div className='lifeline'>
              <div className='lineimage'>
              <svg width="167" height="159" viewBox="0 0 167 159" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="greenline" d="M117.449 138.822C118.144 141.293 118.49 143.859 118.992 146.364C119.232 147.552 119.471 148.74 119.673 149.901C119.8 150.444 119.982 153.404 120.517 153.609C120.77 153.731 122.956 151.583 123.31 151.321C124.241 150.558 125.172 149.795 126.103 149.032C127.9 147.518 129.79 145.389 132.045 144.592C132.823 144.288 133.534 145.127 133.092 145.837C132.262 147.181 130.891 148.088 129.633 149.074C128.231 150.186 126.84 151.363 125.438 152.475C124.127 153.537 121.662 156.566 119.677 155.852C117.794 155.154 118.031 151.355 117.789 149.768C117.172 146.219 116.313 142.614 116.057 139.035C115.927 138.093 117.19 137.904 117.449 138.822Z" fill="#8AC926"/>
              <path className="greenline" d="M43.3087 1.59768C61.7484 6.11466 78.4798 20.6785 88.2316 36.4296C97.6152 51.5037 104.564 74.5186 91.7454 89.4516C87.0503 94.9042 79.117 97.5787 73.7574 91.2845C68.7603 85.4963 70.2553 77.3676 76.1937 72.9178C92.051 61.0057 112.762 79.8723 120.632 93.0598C125.643 101.377 128.583 110.826 129.282 120.487C129.889 129.432 128.959 140.012 123.953 147.589C123.264 148.696 121.227 147.742 121.565 146.471C125.407 139.845 126.343 134.756 126.7 127.776C127.014 120.523 126.393 111.79 123.953 104.93C119.183 91.3436 106.711 76.7013 91.7603 73.146C83.1634 70.4449 70.1686 76.1364 73.7574 86.3941C75.1724 90.5043 79.9045 93.1547 84.2054 91.4695C88.1664 89.9614 91.0061 85.9101 92.7882 82.2883C99.9053 67.4595 93.2759 48.8826 84.7535 35.8095C79.981 28.4448 73.919 21.8215 67.0649 16.3408C59.6433 10.426 51.5337 6.71155 42.9057 3.00656C41.9983 2.74968 42.4013 1.3408 43.3087 1.59768Z" stroke="#8AC926" strokeWidth="3" strokeLinecap='round'/>
              </svg>
              </div>
                <div className="linetext">
                  <p className="line_texts">*Limit 1 vote per person, per day.</p>
                </div>
            </div>
          </div>
          <div className='gallery-right'>
            <div className='galleryright-content'>
                <LifeContent
                lifeheading="Life’s Moments in Focus "
                lifepara_first="Because when everything else in our lives becomes blurry, the things and people that truly matter come into sharp focus."
                Lifepara_second="Let’s celebrate the every-day moments that came into focus over the last year. For though we may be apart, we can all find meaning in our shared frame-worthy from home experiences."
                />
            </div>
            <div className='momentsright-img'>
              <Moments
                  lifeimg ={<img src={Image.Gallerysecond} alt="Winner_img" />}
                  lifeflowershape={<Heartflower />}
                  lifeflower2="lifeflower2"
                />
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}
