import '../../../../../styles/Sub-pages/subpage.css'
import '../../../../../styles/Sub-pages/알림마당 css/갤러리photo.css'
import Dropdownmenu from '../../../../Dropdown/Dropdownmenu'
import Dropdownmenu_mobile from '../../../../Dropdown/Dropdownmenu-mobile'
import MobileCheck from '../../../../Dropdown/Mobile-check'
import ImageLoader from '../../../Image-loader'
import Footer from '../../../../Footer'
import Header from '../../../Link-header'
import { MdHome } from 'react-icons/md'
import { BiSolidRightArrow } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import basketball1 from '../../../../../images/Gallery/Basketball/basketball1.JPG?url'
import basketball2 from '../../../../../images/Gallery/Basketball/basketball2.JPG?url'
import basketball3 from '../../../../../images/Gallery/Basketball/basketball3.JPG?url'
import basketball4 from '../../../../../images/Gallery/Basketball/basketball4.JPG?url'
import basketball5 from '../../../../../images/Gallery/Basketball/basketball5.JPG?url'
import basketball6 from '../../../../../images/Gallery/Basketball/basketball6.JPG?url'
import basketball7 from '../../../../../images/Gallery/Basketball/basketball7.JPG?url'
import basketball8 from '../../../../../images/Gallery/Basketball/basketball8.JPG?url'
import basketball9 from '../../../../../images/Gallery/Basketball/basketball9.JPG?url'
import basketball10 from '../../../../../images/Gallery/Basketball/basketball10.JPG?url'
import basketball11 from '../../../../../images/Gallery/Basketball/basketball11.JPG?url'

export function BasketballPhotos() {
  const isMobile = MobileCheck()

  return (
    <div>
      {isMobile ? (
        <div>
          <Dropdownmenu_mobile />
        </div>
      ) : (
        <div>
          <Dropdownmenu />
        </div>
      )}

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
          <p>알림마당</p>
          <BiSolidRightArrow
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="icon-style"
          />
          <Link to="/notice/gallery/1">
            <h2>갤러리</h2>
          </Link>
        </div>

        {!isMobile && (
          <div className="navbar-container">
            <div className="navbarVertricle">
              <div className="title">
                <h2>알림마당</h2>
              </div>
              <div className="itemList">
                <Link to="/notice/announcement/1">
                  <div className="navItem">
                    <div className="navLink">공지/소식사항</div>
                  </div>
                </Link>
                <Link to="/notice/gallery/1">
                  <div className="navItem">
                    <div className="navLink">갤러리</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="content-container">
          <div className="subMenu-title-container">
            <h2>갤러리</h2>
            <h3>대한생활체육회의 포토갤러리 전해드립니다.</h3>
          </div>

          <div>
            <div className="article-info-container">
              <div className="article-title">
                <p>제목</p>
                <h4>Basketball</h4>
              </div>
              <div className="article-author">
                <p>작성자</p>
                <h4>관리자1</h4>
              </div>
              <div className="article-createdAt">
                <p>등록일</p>
                <h4>Date?</h4>
              </div>
            </div>

            <div className="quill-article-container">
              <div
                className="ql-editor"
                data-gramm="false"
                contentEditable="false"
              >
                <p>Basketball</p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball1}
                    alt="basketball1"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball2}
                    alt="basketball2"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball3}
                    alt="basketball3"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball4}
                    alt="basketball4"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball5}
                    alt="basketball5"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball6}
                    alt="basketball6"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball7}
                    alt="basketball7"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball8}
                    alt="basketball8"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball9}
                    alt="basketball9"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball10}
                    alt="basketball10"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <ImageLoader
                    src={basketball11}
                    alt="basketball11"
                    className="ql-editor-img"
                  />
                </p>
                <p>
                  <br />
                </p>
              </div>
            </div>

            <div className="article-button-container">
              <a href="/#/notice/gallery/1">
                <div className="article-button">돌아가기</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
