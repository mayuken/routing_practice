import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  console.log(arr);

  const history = useHistory();

  const onClickDetailA = () => history.push("/page1/detail_a");

  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "/page1/detail_a", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detail_b">DetailB</Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
