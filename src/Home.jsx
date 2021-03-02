import { h } from "preact";
import { useEffect } from "preact/hooks";

export const Home = () => {
  useEffect(() => {
    console.log("test");
  }, []);

  return <div>hello world</div>;
};
