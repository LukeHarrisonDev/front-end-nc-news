import newspaper from '../images/news-paper.jpg'
import newsPhone from '../images/news-phone.jpg'

function Home() {

  return (
    <>
      <section>
        <img id="stock" src={newspaper} />
        <img id="stock" src={newsPhone} />
      </section>
      <h2 className='balsamiq'>Welcome to NC News</h2>
      <p>Ay Up, welcome tu' best News ar'icle website in' North</p>
      <p>Please give ' API a bit a time to grab ' data, it's 'osted on a free service ya know</p>
      <p>Click "Articles" in' nav bar to go to all o' ar'icles</p>
      <p>Or ya can login by clicking on "Login" to post comments and tha'</p>
      <section>

      </section>
    </>
  )
}

export default Home