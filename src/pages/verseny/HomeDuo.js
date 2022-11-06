import DuoList from "./DuoList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://battleclub.games:8000/duo')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <DuoList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;
