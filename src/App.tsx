import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPages } from './pages/authPage/AuthPages'
import { ContactsPage } from './pages/contactsPage/ContactsPage'
import { MainPage } from './pages/mainPage/MainPage'
import { ModalWindow } from './components/modalWindow/ModalWindow'
import { PersonPage } from './pages/personPage/PersonPage'
import { Line } from './styled/Line'
import { Header } from './components/header/header'

export const App = () => {
  const [modalActive, setModalActive] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('dataAuth') ? true : false)
  useEffect(() => {
      setModalActive(false)
    }, [isLoggedIn])
  return <>
    <BrowserRouter>
      <Header setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setModalActive={setModalActive} />
      <Line />
      <main>
        <Routes>
          <Route path='/' element={<MainPage setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setModalActive={setModalActive} />} />
          {isLoggedIn && <Route path='/user'
            element={
              <PersonPage setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
                setModalActive={setModalActive} />} />
          }
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      <ModalWindow modalActive={modalActive} setModalActive={setModalActive}>
        <AuthPages setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setModalActive={setModalActive} />
      </ModalWindow>
    </BrowserRouter>
  </>

}
