import Dropdownmenu from './Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from './Dropdown/Dropdownmenu-mobile'
import Photogallery from './Photogallery'
import Footer from './Footer'
import Banner from './Banner'
import HomepageVideo from './HomepageVideo'
import Popup from './Popup'
import Noticeboard from './Noticeboard'
import Intro from './Intro'
import MobileCheck from './Dropdown/Mobile-check'
import '../styles/homepage.css'

export function Homepage() {
  const isMobile = MobileCheck()
  console.log('isMobile:', isMobile)
  return (
    <div className="page-container">
      <div>{isMobile ? <Dropdownmenu_mobile /> : <Dropdownmenu />}</div>
      <Banner />
      <Popup />
      <Noticeboard />
      <div className="video-section">
        <HomepageVideo />
      </div>
      <div>
        <Intro />
        <Photogallery />
        <Footer />
      </div>
    </div>
  )
}
