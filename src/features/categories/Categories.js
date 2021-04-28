import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from './categoriesSlice';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Category from './Category'

export default function Categories () {
  const categories = useSelector(selectCategories)
  const { path, url } = useRouteMatch()

  return (
    <>
      <h1>Categories</h1>
      <ul>
        { Object.keys(categories).map(slug => (
          <li>
            <Link to={`${url}/${slug}`}>{slug}</Link>
          </li>
        ))}
      </ul>
      <Route path='/categories/:name'>
        <Category />
      </Route>
    </>
  )
}
