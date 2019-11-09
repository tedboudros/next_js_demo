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
