import React from 'react';
import './style.css';
import profilePictute from './profile.png'

/* function App() {
  let firstName = "Will";
  let lastName = "Smith";
  return <div>
    <img src='/profile.png' className='my-profile' />
    <p>{firstName}{lastName}</p>
  </div> 

function createForm(){
  let input = (<input type="text" placeholder = "Name"/>);
  let button = <button>Submit</button>;
  return (
  <form>
    {input}
    {button}
  </form>
);}

return (<div>
    {createForm()}
</div>
)
}*/
/*
const firstName = prompt('Type your first name');

function App(){
	return (
		<div>
			<p> Hello {firstName || 'Anonymous'} </p>
			<p> It looks like you {firstName ? 'have': 'don’t have'} a name</p>
			{
				!firstName && (
        <form>
						<p> Type your name here </p>
						<input type='text' />
          </form>)
			}
		</div>
	)
}*/

function App(){
  return(
    <>
    <div style={{border:'solid 1px black', maxWidth:'100vw'}}>  
         <h1 className='title red'>Mohamed Jebali</h1>  
              <>
              <img className='profilesrc' src={profilePictute}/> 
              </>
              <>
             	<img src='profile.png' /> 
              </>
    </div>   

    <div>
      <video width={320} height={240} controls >  
           <source src='./myvideo.mp4' type='video/mp4'/>
      </video>
    </div>
    </>
  )
}

export default App;
