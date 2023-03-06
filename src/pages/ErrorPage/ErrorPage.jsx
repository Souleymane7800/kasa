import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Main from '../../layout/Main/Main';
import './errorPage.css'

export function ErrorPage() {
  return (
    <>
      <Header />
      <Main >
            <div className="error-page">
                  <h1>404</h1>
                  <h2>Oups! La page que vous demandez n'existe pas.</h2>
                  <Link to="/">Retourner sur la page d'accueil</Link>
            </div>

      </Main>
    </>
  )
}


