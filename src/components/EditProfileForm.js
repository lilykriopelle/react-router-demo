import React, { useState } from 'react';
import { editUser } from '../features/session/sessionSlice'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom'

export function EditProfileForm () {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser({username: username}));
    history.push('/profile');
  }

  return (
    <section>
      <h1>Edit Username</h1>
      <form onSubmit={handleSubmit}>
        <label>
        Username
          <input
            id='username'
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
        </label>
        <button>Edit</button>
      </form>
    </section>
  )
}
