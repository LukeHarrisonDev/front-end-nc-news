import newspaper from '../images/news-paper.jpg'
import newsPhone from '../images/news-phone.jpg'

function Home() {

  return (
    <>
      <section>
        <img id="stock" src={newspaper} />
        <img id="stock" src={newsPhone} />
      </section>
      <h2 className='balsamiq'>Welcome to Luke's NC News</h2>
      <p>Click "Articles" in the nav bar to view all the articles and use the filters from there.</p>
      <p>When you see a loading screen, please give the API a moment to grab the data, it's hosted on a free service.</p>
      <p>Or you can Login to post comments and vote on articles by clicking "Login".</p>

    {/* ///// Northern Version ////// */}
      {/* <p>Ay Up, welcome tu' best News ar'icle website in' North</p>
      <p>Please give ' API a bit a time to grab ' data, it's 'osted on a free service ya know</p>
      <p>Click "Articles" in' nav bar to go to all o' ar'icles</p>
      <p>Or ya can login by clicking on "Login" to post comments and tha'</p> */}
    </>
  )
}

export default Home