import ImageSlider from "./ImageSlider";

const API_URL = "https://picsum.photos/v2/list";

function App() {
  return <ImageSlider apiURL={API_URL} page={58} limit={10} />;
}

export default App;
