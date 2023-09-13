import Products from "@/components/UI/Products";

const HomePage = async() => {

  // get static props like method
  //  if you another way use 
  // just create another funtion under the code 
  const res = await fetch("http://localhost:5000/watches", {
    next: {
      revalidate: 5
    },
    cache: "force-cache" // as a defult 
  });
  const data = await res.json();
  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
      {data.map(product => <Products key={product.id} product={product}></Products>)}
      </div>
      
    </div>
  );
};

export default HomePage;
