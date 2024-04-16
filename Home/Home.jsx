
import "./home.css";
import Bulb from "../../../images/bulb.png";
import Fire from "../../../images/burn.png";
import guarant from "../../../images/guarantee.png"
import Handshake from '../../../images/handshake.png';
import quotes from "../../../images/double-quotes.png";
import thiru from "../../../images/thiru.jpg";
import sakthi from "../../../images/sakthi.jpg";
import surendar from "../../../images/surendar.jpg";

function Home() {
  

  return (
    <div className='homeContainer'>
    <div className='home'>Connect with Mentor's Today</div>
    <div className='navbar'><h1 style={{display:'inline',fontFamily:"Fjalla One, sans-serif",fontWeight:"lighter",MarginTop:'30px',paddingLeft:'2%'}} >MentorConnect</h1> <ul><li>Home</li>
    <li style={{whiteSpace:'nowrap'}}>Search For</li>
    <li>Profile</li></ul></div>
    <center><img src={Handshake} alt="handshake" id='handshake' /><h1 id='center' className='fjalla-one-regular '>Empower Your learning and grow your skills</h1></center>
    <div className='pg-2'>
      <div className='border'><div><span><img src={Bulb} id='logs' alt="" /></span><div className='content'><h2>Knowledge Hub</h2><p>Expand your knowledge and inspire continuous learning</p></div></div>
      <div><span><img id='logs' src={guarant} alt="" /></span><div className='content'><h2>Quality Education</h2><p>Get First Quality education</p></div></div>
      <div><span><img id='logs'src={Fire} alt="" /></span><div className='content'><h2>Stress Relief</h2><p>Dont worry about Complex questions</p></div></div>
      </div>
      <h2 style={{textAlign:'center',color:'#d862bc',marginTop:'4rem'}}>Join KnowledgeShare community and connect with</h2>

      <div className="reviews">
        <div className='review'><img style={{height:'4rem',width:'4rem'}} src={quotes} /><p>I've gained valuable insights and knowledge</p> <div className='user'><img src={thiru}/><div><span>Thirukumaran</span> <span>IIT student</span></div></div></div>
        <div className='review'><img style={{height:'4rem',width:'4rem'}} src={quotes}  /><p>This platform transformed my Life</p> <div className='user'><img src={surendar}/> <div><span>Surendar</span> <span>Aspiring Enterpreneur</span></div></div></div>
        <div className='review'><img style={{height:'4rem',width:'4rem'}} src={quotes}  /><p>Great insights</p> <div className='user'><img src={sakthi}/> <div><span>Shakthivel</span><span>Senior Developer</span></div></div></div>
      </div>
    </div>
    </div>
  );
}

export default Home;
