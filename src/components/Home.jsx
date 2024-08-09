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
      <p>Click "All Articles" in' nav bar to go to ar'icles</p>
      <section>

      </section>
    </>
  )
}

export default Home