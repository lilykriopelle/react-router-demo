import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from './categoriesSlice';
import { selectArticles } from '../articles/articlesSlice';
import { Link, useRouteMatch, useParams } from 'react-router-dom';

export function Category () {
  const categories = useSelector(selectCategories)
  const articles = useSelector(selectArticles)

  const { name } = useParams()
  const { path, url } = useRouteMatch()

  return (
    <>
      <h1>Articles Related to {name}</h1>
      <ul>
        { categories[name].map(articleSlug => (
          <li>
            <Link to={`/articles/${articleSlug}`}>{articles[articleSlug].title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
