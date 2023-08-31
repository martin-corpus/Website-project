import '../../../styles/Sub-pages/subpage.css'
import '../../../styles/Sub-pages/단체소개 css/전국체육회현황-content.css'
import Dropdownmenu from '../../Dropdown/Dropdownmenu'
import Footer from '../../Footer'
import Header from '../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export function 전국체육회현황() {
  //   function handleEnlarge(imageSrc: string) {
  //     const enlargedImageUrl = getEnlargedImageUrl(imageSrc)

  //     // Open a new tab with the enlarged image
  //     window.open(enlargedImageUrl, '_blank')
  //   }

  //   // Function to get the URL of the enlarged image
  //   function getEnlargedImageUrl(originalUrl: string) {
  //     // You can modify the URL or use any logic to get the enlarged image URL
  //     // For example, adding "_large" before the file extension
  //     const parts = originalUrl.split('.')
  //     const extension = parts.pop()
  //     return `${parts.join('.')}_large.${extension}`
  //   }

  return (
    <div>
      <Dropdownmenu />

      <Header />

      <div className="subpage-container">
        <div className="location-container">
          <MdHome
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="homeIcon"
          />
          <Link to="/">
            <h2>홈</h2>
          </Link>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <p>단체소개</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="#info/purpose">
            <h2>전국체육회현황</h2>
          </Link>
        </div>

        <div className="navbar-container">
          <div className="navbarVertricle">
            <div className="title">
              <h2>단체소개</h2>
            </div>
            <div className="itemList">
              <Link to="#info/greet">
                <div className="navItem">
                  <div className="navLink">전국체육회현황</div>
                </div>
              </Link>
              <Link to="#info/purpose">
                <div className="navItem">
                  <div className="navLink">국제체육회현황</div>
                </div>
              </Link>
              <Link to="#info/chart">
                <div className="navItem">
                  <div className="navLink">종목별 운영현황</div>
                </div>
              </Link>
              <Link to="#info/status">
                <div className="navItem">
                  <div className="navLink">산하단체</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div>
            <div className="subMenu-title-container">
              <h2>전국체육회현황</h2>
              <h3>대한생활체육회의 전국체육회현황입니다.</h3>
            </div>
            <div>
              <div className="group-list-container">
                <div className="group-list-title">서울특별시생활체육회</div>
                <div className="group-list-img-container">
                  <div className="group-list-img-container2">
                    {/* <button
                      className="enlarge-link"
                      onClick={() =>
                        handleEnlarge(
                          'https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Flyh.png?alt=media&token=041fbbf2-27cc-41a9-9606-5d11f933d6fb'
                        )
                      }
                    > */}
                    <img
                      className="group-image"
                      src="https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/group%2Flyh.png?alt=media&amp;token=041fbbf2-27cc-41a9-9606-5d11f933d6fb"
                      alt="서울특별시생활체육회"
                    />
                    {/* </button> */}
                  </div>
                </div>
                <div className="group-list-text-container">
                  <p>
                    회장 : 이육행
                    <br />
                    체육회명 : 서울특별시생활체육회
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
