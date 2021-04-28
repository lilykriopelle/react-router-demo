import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Link, Redirect, useRouteMatch } from 'react-router-dom';
import { selectCurrentUser, selectIsLoggedIn } from './sessionSlice';
import EditProfileForm from '../../components/EditProfileForm';

export default function Profile () {
  const currentUser = useSelector(selectCurrentUser)
  const loggedIn = useSelector(selectIsLoggedIn)

  const { url, path } = useRouteMatch()

  if (!loggedIn) {
    return <Redirect to='/sign-up' />
  }

  return (
    <>
      <h1>{currentUser.username}</h1>
      <Link to={`${url}/edit`}>Edit</Link>
      <Route path={`${path}/edit`}>
        <EditProfileForm />
      </Route>
    </>
  )
}
