import React from 'react';
import { useSelector } from 'react-redux';
import { selectArticles, filterArticles } from './articlesSlice';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

export default function Articles () {
  const articles = useSelector(selectArticles)
  const { url } = useRouteMatch()

  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const title = queryParams.get('title')

  const filteredArticles = title ? filterArticles(title, articles) : Object.values(articles)

  return (
    <>
      <h1>Articles</h1>
      <ul>
        { filteredArticles.map(article => (
          <li>
            <Link to={`${url}/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
