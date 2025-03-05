//Creating  a Custome hook in components section 

// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [url]);

//   return [data];
// };

// export default useFetch;

// using the custome hook in the index.js file which is useFetch

// import ReactDOM from "react-dom/client";
// import useFetch from "./useFetch";

// const Home = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

//   return (
//     <>
//       {data &&
//         data.map((item) => {
//           return <p key={item.id}>{item.title}</p>;
//         })}
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Home />);