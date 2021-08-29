import { useState } from 'react';

import { setLocalStorage, loadLocalStorage } from '../../services/local-storage/local-storage'

export const usePopup = (() => {
  const [popupActive, setPopupActive] = useState(true)

  const localStorage = loadLocalStorage()

  if (!localStorage) {
    setLocalStorage({ dismissed: false })
  } else {
    if (localStorage.dismissed || localStorage.answered) {
      if (popupActive) setPopupActive(false)
    }
  }

  const onClose = () => {
    setLocalStorage({ ...localStorage, dismissed: true })
    setPopupActive(false)
  }

  return { popupActive, setPopupActive, onClose };
})
