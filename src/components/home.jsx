import React from 'react';
import vg from "../assets/Physics.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
const home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1> Techy Star</h1>
          <p>solution to all your problems</p>
        </main>
      </div>
      <div className='home2'>
        <img src={vg} alt='graphics' />
        <div>
          <p>
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
          </p>
        </div>
      </div>
      <div className='home3' id='about'>
        <div>
          <h1>Who We Are ?</h1>
          <p>
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
            hello
            my name is techy guys
            how can i help you ?
            all the solution is here in just one click
          </p>
        </div>
      </div>
      <div className='home4' id='brands'>
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay : "0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay : "0.5s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay : "0.7s"
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay : "0.9s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default home
