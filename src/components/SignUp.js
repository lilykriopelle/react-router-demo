import React, { useState } from 'react';
import { signUp } from '../features/currentUser/currentUserSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom'

export function SignUp () {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUp({username: username}));
    history.push('/profile');
  }

  return (
    <section>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
        Username
          <input
            id='username'
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </label>
        <button>Sign Up</button>
      </form>
    </section>
  )
}
