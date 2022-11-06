import TrioList from "./TrioList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://battleclub.games:8000/trio')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <TrioList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
