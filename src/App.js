import React from 'react'

import './App.scss';

import { Base } from './components/pages';
import { usePopup } from './components/hooks/use-popup';

const App = () => {
  const { popupActive, setPopupActive, onClose } = usePopup()

  const stopPropagation = (event) => {
    event.stopPropagation();
  }

  return (
    popupActive &&
    <div onClick={() => setPopupActive(false)} className="popup-container">
      <div onClick={stopPropagation} className="popup">
        <Base handleClose={onClose}></Base>
      </div>
    </div>
  )
}

export default App;
