import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, logOut } from '../features/session/sessionSlice'

export default function Header () {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogout = e => {
    dispatch(logOut())
  }

  return (
    <div className='header'>
      <NavLink to='/articles' activeClassName='active'>Articles</NavLink>
      <NavLink to='/categories' activeClassName='active'>Categories</NavLink>
      {
        currentUser.username
          ? <>
              <NavLink to='/profile' activeClassName='active'>Profile</NavLink>
              <button onClick={handleLogout} className="logout"> Log Out </button>
            </>
          : <NavLink to='/sign-up' activeClassName='active'>Sign Up</NavLink>
        }
    </div>
  )
}
