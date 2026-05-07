import"../Component/CSS/TopCities.css"
const TopCity = () => {

  return (
    <div className='topCitiesContainer'>
        <img src="/assets/glovoapp.com_b69ae758-72c1-4e02-9794-c979e2af5cbf/cities-icon.373dc0b9.svg" alt="image" className='topCitiesHolder'/>
        <p className='topCitiesWrapper'>Top cities in Nigeria</p>
        <div className='topCitiesButton'>
            <button>lagos</button>
            <button>Abuja</button>
        </div>
        <div>
            <button className='browserButton'>Browse all cities</button>
        </div>
    </div>
  )
}

export default TopCity