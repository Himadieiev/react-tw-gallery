import { useEffect } from "react";
import { useState } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const PIXABAY_API_KEY = "34391512-847c3dd62fc26ce6cb8d8814a";

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <div className="text-6xl text-center mx-auto">Loading...</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
