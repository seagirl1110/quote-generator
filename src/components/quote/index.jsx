import styles from './styles.module.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from '../../redux/thunk';

function Quote() {
  const dispatch = useDispatch();

  const getQuote = () => {
    dispatch(fetchQuote());
  };

  useEffect(() => {
    getQuote();
  }, []);

  const { content, author, status, error } = useSelector(
    (state) => state.quote
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>{error}</div>;

  if (status === 'succeeded')
    return (
      <div className={styles.container}>
        <q>{content}</q>
        <p className={styles.author}>- {author}</p>
        <button className={styles.btn} onClick={getQuote}>
          New Quote
        </button>
      </div>
    );
}

export default Quote;
