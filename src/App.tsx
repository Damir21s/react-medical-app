import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthPages } from './pages/authPage/AuthPages'
import { ContactsPage } from './pages/contactsPage/ContactsPage'
import { Header } from './components/header/Header'
import { MainPage } from './pages/mainPage/MainPage'
import { ModalWindow } from './components/modalWindow/ModalWindow'
import { PersonPage } from './pages/personPage/PersonPage'
import { Line } from './styled/styled'

export const App = () => {
  const [modalActive, setModalActive] = useState(false)
  const [isAuth, setIsAuth] = useState(localStorage.getItem('dataAuth') ? true : false)
  useEffect(() => {
    setModalActive(false)
  }, [isAuth])
  return <>
    <BrowserRouter>
      <Header setIsAuth={setIsAuth} isAuth={isAuth} setModalActive={setModalActive} />
      <Line />
      <main>
        <Routes>
          <Route path='/' element={<MainPage setIsAuth={setIsAuth} isAuth={isAuth} setModalActive={setModalActive} />} />
          {isAuth && <Route path='/user'
            element={
              <PersonPage setIsAuth={setIsAuth}
                isAuth={isAuth}
                setModalActive={setModalActive} />} />
          }
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      <ModalWindow modalActive={modalActive} setModalActive={setModalActive}>
        <AuthPages setIsAuth={setIsAuth} isAuth={isAuth} setModalActive={setModalActive} />
      </ModalWindow>
    </BrowserRouter>
  </>

}
