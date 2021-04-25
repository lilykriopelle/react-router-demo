import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectArticles } from './articlesSlice';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export function Article () {
  const articles = useSelector(selectArticles)
  const { title } = useParams()
  const article = articles[title]

  return (
    <div className='article-container'>
      <h1 className='article-title'>{article.title}</h1>
      <h2>by <Link to={`/authors/${article.author}`}>{article.author}</Link></h2>
      <ReactMarkdown>
        {article.body}
      </ReactMarkdown>
    </div>
  )
}
