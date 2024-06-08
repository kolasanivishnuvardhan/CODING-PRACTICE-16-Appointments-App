import './index.css'

import {format} from 'date-fns'

const AppointmentItem = props => {
  const {eachAppointmentDetails, toogleStarredImg} = props
  const {id, title, date, isStarred} = eachAppointmentDetails
  const isStarredImg = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarImg = () => {
    toogleStarredImg(id)
  }
  return (
    <li className="li">
      <div className="title-star-img-container">
        <p className="title-name">{title}</p>
        <button className="star-btn" type="button" onClick={onClickStarImg} data-testid="star">
          <img src={isStarredImg} className="star-img" alt="star"/>
        </button>
      </div>
      <p className="title-date-time">
        {format(new Date(date), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
