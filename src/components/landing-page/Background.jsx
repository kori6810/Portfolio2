import hero from '../../assets/hero.png'
const BackgroundTxt = ()=>{
  return(
    <div className="background__txtBox">
      <h1 className="background__text">Siroj</h1>
      <h1 className="background__text">Komol</h1>
    </div>
   
    
  )
}

const BackgroundHero =()=>{
  return(
    <>
      <img src={hero} alt="Hero" className='background__hero'/>
    </>
  )
}

export {BackgroundTxt, BackgroundHero };