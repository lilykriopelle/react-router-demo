import React, { useState } from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, logOut } from '../features/session/sessionSlice'

export function Header () {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = e => {
    dispatch(logOut())
  }

  return (
    <div className='header'>
      <NavLink to='/articles' activeClassName='active'>Articles</NavLink>
      <NavLink to='/categories' activeClassName='active'>Categories</NavLink>
      {
        currentUser.username
          ? <span>
              <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
              <button onClick={handleLogout}> Log Out </button>
            </span>
          : <NavLink to='/sign-up' activeClassName='active'>Sign Up</NavLink>
        }
        <button onClick={e => history.goBack()}>
          Back
        </button>
        <button onClick={e => history.goForward()}>
          Forward
        </button>
    </div>
  )
}
