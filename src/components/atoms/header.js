import React from 'react'
import PropTypes from 'prop-types'

import './header.scss'

import { PageCounter } from '.'

export const Header = ({ lastPage, actualPage, handleClose }) => {
  return (
    <header className="header">
      <div className="header__left">
        <PageCounter lastPage={lastPage} actualPage={actualPage} />
      </div>
      <div className="header__right">
        <button className="header__close-button" onClick={handleClose}>X</button>
      </div>
    </header>
  )
}

Header.propTypes = {
  lastPage: PropTypes.number.isRequired,
  actualPage: PropTypes.number.isRequired,
  handleClose: PropTypes.func.isRequired
}