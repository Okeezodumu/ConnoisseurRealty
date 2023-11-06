import React from 'react'
import Nav from '../Components/Nav'
import Foot from '../Components/Foot'
import './Home.css'


const Home = () => {
  React
  return (
    <>

      <div>
        <Nav />
        <div className='container'>
          <h1>Let our experienced Architects design your dream house <br /><span>Beautiful</span> <span>Fuctional</span> <span>Affordable</span></h1>

          <img src="Connos/ben.jpg" alt="" />
        </div>
        <div className='container1'>
          <h1><font>W</font>hat <font>W</font>e <font>D</font>o</h1>
          <img src="Connos/umbrella.jpg" alt="" />
          <p>We are a group of people who have been passionate about building and designing  nature friendly homes in Africa. We are committed to bringing nature closer to the people by providing shelter. <br />We design, build and do consultations</p>
        </div>

        <div className='container2'>
          <h1>What Makes Us <font>Extra</font>ordinary?</h1>
        </div>
        <div className='Con'>
          <div className='contain'>
            <h1>Top<font>100</font></h1>
            <p>Real Estate Companies in Nigeria <br />Design, contracts and supervision</p>
            <br />
            <h1><font>#</font></h1>
            <p>Biophyllia Enthusiast and <br /> Nature Friendly design</p>
          </div>

          <div className='contain2'>
            <h1>10<font>+</font></h1>
            <p>Years of Experience</p>
            <br />
            <h1>20<font>+</font></h1>
            <p>Patners Globally</p>
          </div>

          <div className='contain3'>
            <h1>100<font>%</font></h1>
            <p>Customer satisfaction</p>
            <br />
            <h1>5<font>+</font></h1>
            <p>Award for Excellence </p>
          </div>


        </div>
        <div className='Customers'>
          <h1>Hear From our Esteemed Customers</h1>
          <img src="Connos/unsplash.jpg" alt="" />
        </div>
        <div className='Adoga'>
          <p> "Prior to Connoisseur Realty Ltd, I found it difficult to get good, affordable apartments that met my satisfaction.But that is all history now because, the  Biophyllia designs my family and I were used to in the United States are here"</p>
          <br />
          <img src="Connos/Adoga.jpg" alt="Adoga" />
          <h1>Adoga, O.</h1>
        </div>
        <div className='Kubi'>
          <p>What I love most about Connoisseur Realty has to be their nature friendly designs; having natural lightings right in your living room. It's amazing!</p> <br />
          <img src="Connos/Kubi.jpg" alt="" /> <br />
          <h1>Kubi Ike</h1>
        </div>
        <img className='terrace' src="Connos/stairs.jpg" alt="" />
        <h1 >Meet the Connoisseur Team</h1>
        <div className='Meet'>
          <div className='CEO'>
            <img src="Connos/MPG_0584.jpg" alt="" />
            <h2>Chief Executive Officer, Founder Connoisseur Realty Limited</h2>
            <p>Arch. Amedu Joseph Odumu is a visionary leader with technical wits and an eye for intresting, natural and yet jaw dropping buildings. He has several years of experience in the building industry.</p>
          </div>
          <div className='COO'>
            <img src="Connos/COO.png" alt="" />
            <h2>Director, IT and Operations </h2>
            <p>Okopi Odumu is a geologist, researcher and mobile/web developer with immense experience having manaaged several projects under his belt.</p>
          </div>

          <div className='DirectorFin'>
            <img src="Connos/mom.jpg" alt="" />
            <h2>Director Finance </h2>
            <p>Ene Odumu is a mother,tutor, mathematician and business woman with several years of experience</p>
          </div>

        </div>
        <img src="Connos/Company logo.png" alt="" />
        <hr />
        <div className='Footerelement'>
          <div className='About'>

            <ul>
              <li><h2>About | </h2></li>
              <li><a href="">Privacy Note </a></li>
              <li><a href="">Terms of Use</a> </li>
              <li><a href="">Our Company</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">Advertise with us</a></li>
            </ul>
          </div>
          <div className='Contacts'>

            <ul>
              <li><h2>Contact | </h2></li>
              <li><a href="">Customer Service </a></li>
              <li><a href="">Consultations </a></li>
              <li><a href="">Suggestions </a></li>
            </ul>
          </div>
          <div className='Connects'>
            <ul>
              <li><h2>Connect | </h2></li>
              <li><a href="">Email Newsletter</a></li>
              <li><a href="https://instagram.com/connoisseur_realty?igshid=ZDdkNTZiNTM=">Instagram</a></li>
              <li><a href="">X</a></li>
              <li><a href="https://www.linkedin.com/company/connoisseur-realty-ltd/ ">linkedIn</a></li>
              <li><a href="https://selar.co/m/The_Billionaire_Architect?fbclid=PAAaZY8c1ztkR_drxZw0xq2Srn3BSzVTEEK_x4XsSJszRW16tCe-9kzSxJjtQ ">Selar</a></li>
            </ul>

          </div>
          <div className='Community'>
            <ul>
              <li><h2>Community | </h2></li>
              <li><a href="">Join our Community</a></li>
              <li><a href="">Become our Partner</a></li>

            </ul>
          </div>

        </div>
        <hr />

      </div>
      <Foot />
    </>

  )
}

export default Home