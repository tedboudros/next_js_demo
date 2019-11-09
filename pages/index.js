/*import React from 'react'
import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'
import Clock from '../components/clock'
import Counter from '../components/counter'
*/

import { withRedux } from "../lib/redux";
const IndexPage = () => {
  /*const dispatch = useDispatch()
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now()
    })
  }, 1000)*/
  return <div>hello</div>;
};

IndexPage.getInitialProps = ({ reduxStore }) => {
  /*
  const { dispatch } = reduxStore
  dispatch({
    type: 'TICK',
    light: typeof window === 'object',
    lastUpdate: Date.now()
  })
*/
  return {};
};

export default withRedux(IndexPage);
