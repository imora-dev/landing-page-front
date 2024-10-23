import IconCarousel from '../Containers/IconCarousel/IconCarousel'
import DevImageContainer from '../Containers/DevImgContainer/DevImageContainer';
import './projectCard.css'
function ProjectCard() {
  return (
    <>
    <span id="course-container">
            <div id="img-project-name-container">
              <img src="/img/project-img.jpg" alt="project-img" id="project-img"/>
              <div id="project-name">
                <h4>Nombre del proyecto</h4>
                <span id="dev-img-container">
                  <DevImageContainer />
                </span>
              </div>
            </div>
            <ul id="course-details"> 
                <li id="course-detail-description">Lorem ipsum dolor sit amet consectetur. Augue nisl pellentesque tincidunt sed vitae rhoncus. Nec nisi risus bibendum sit tristique odio. Leo justo hendrerit feugiat bibendum. Hendrerit risus id elementum dui aliquam amet facilisi egestas et.</li>
              <li className='px-10'>
                <IconCarousel />
                </li>
              </ul>
              <div id='btn-container'>
                <button type='button'>
                  <img src='/assets/other-assets/svg/common/quill_link-out.svg'/>
                  <p>Demo</p>
                </button>
                <button type='button'>
                  <img src='/assets/other-assets/svg/social/github-logo.svg'/>
                  <p>GitHub</p>
                </button>
              </div>
          </span>
    </>
  )
}

export default ProjectCard