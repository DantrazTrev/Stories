import React, { useState } from "react";
import "./Card.css";
import Heart from './Heart/Heart'
import moment from 'moment';
const stock_image =
  "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
const s3_url = "https://qtstage-01.gumlet.io/";


const storage = window.sessionStorage;


export default function Card({ story }) {
  const imgsr = story.story["hero-image-s3-key"]
    ? s3_url + story.story["hero-image-s3-key"]
    : stock_image;
    
    if(storage.getItem(story.id)===null)
    storage.setItem(story.id,false)

    console.log(storage.getItem(story.id))
    const [Liked,setLike]=useState(JSON.parse(storage.getItem(story.id)))


    const Like=()=>{
        console.log("working")
        setLike(!Liked)
        storage.setItem(story.id,!Liked)
    }

    const published_date= Date(story.story["published-at"]);
    const formatted_date=moment(published_date).format('YYYY-MM-DD');
  return (
    <div className="card">
      <img src={imgsr} />
      <div class="info">      <h2>{story.story.headline}</h2>
      <h3>{story.story["author-name"]}</h3>
      <h5>{formatted_date}</h5>
      </div>

      <Heart Like={Like} Liked={Liked}/>
    </div>
  );
}
