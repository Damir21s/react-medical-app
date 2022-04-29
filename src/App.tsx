import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Auth } from './components/auth/Auth'
import { ContactsPage } from './components/contactsPage/ContactsPage'
import { Header } from './components/header/header'
import { MainPage } from './components/mainPage/MainPage'
import { ModalWindow } from './components/modalWindow/ModalWindow'
import { PersonalPage } from './components/personalPage/PersonalPage'
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
              <PersonalPage setIsAuth={setIsAuth}
                isAuth={isAuth}
                setModalActive={setModalActive} />} />
          }
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
      <ModalWindow modalActive={modalActive} setModalActive={setModalActive}>
        <Auth setIsAuth={setIsAuth} isAuth={isAuth} setModalActive={setModalActive} />
      </ModalWindow>
    </BrowserRouter>
  </>

}
