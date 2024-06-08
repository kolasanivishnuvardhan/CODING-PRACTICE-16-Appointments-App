import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: [], ifStarred: false}

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeDateInput = event => {
    this.setState({date: event.target.value})
  }

  onAddBtn = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarred: false,
    }
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  toogleStarredImg = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment =>
        eachAppointment.id === id
          ? {...eachAppointment, isStarred: !eachAppointment.isStarred}
          : eachAppointment,
      ),
    }))
  }

  onClickStarredBtn = () => {
    this.setState(prevState => ({
      ifStarred: !prevState.ifStarred,
    }))
  }

  render() {
    const {title, date, appointmentsList, ifStarred} = this.state
    const filteredAppointmentsList = ifStarred
      ? appointmentsList.filter(eachAppointment => eachAppointment.isStarred)
      : appointmentsList
    return (
      <div className="bg-container">
        <div className="bg-appoinment-container">
          <div className="appoinment-container">
            <div className="add-appointment-container">
              <h1 className="add-appointment">Add Appointment</h1>
              <form onSubmit={this.onAddBtn}>
                <label className="title" htmlFor="titleInput">
                  Title
                </label>
                <br />
                <input
                  id="titleInput"
                  type="text"
                  className="text-input"
                  placeholder="Title"
                  onChange={this.onChangeTitleInput}
                  value={title}
                />
                <br />
                <label className="title" htmlFor="dateInput">
                  Date
                </label>
                <br />
                <input
                  id="dateInput"
                  type="date"
                  className="text-input"
                  onChange={this.onChangeDateInput}
                  value={date}
                />
                <br />
                <button className="add-btn" type="submit">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
              className="appointment-img"
            />
          </div>
          <hr className="seperator" />
          <div className="appoinment-list-header-container">
            <h1 className="header-name">Appointments</h1>
            <button
              type="button"
              className={`starred-button ${ifStarred ? 'bg-starred' : ''}`}
              onClick={this.onClickStarredBtn}
            >
              starred
            </button>
          </div>
          <ul className="appoinment-list-container">
            {filteredAppointmentsList.map(eachAppointment => (
              <AppointmentItem
                eachAppointmentDetails={eachAppointment}
                key={eachAppointment.id}
                toogleStarredImg={this.toogleStarredImg}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
