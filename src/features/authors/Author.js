import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthors } from './authorsSlice';
import { Link, useParams } from 'react-router-dom';

export function Author () {
  const { name } = useParams()
  const authors = useSelector(selectAuthors)
  const author = authors[name]

  return (
    <>
      <h1>Articles by {name}</h1>
      <ul>
        {author.articles.map(slug => (
          <li>
            <Link to={`/articles/${slug}`}>
              {slug}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
