
export const getData= async(url : string) =>{
//   const res = await fetch("https://fakestoreapi.com/products/",{
//     next: { revalidate: 10 }
//   });

//   ambil data dari server
const res = await fetch(url,{
    cache:"no-store",
    next :{
        // setiap 30 detik data blum muncul kembali lgi, utk performance
        // revalidate: 30,
        // untuk manual atau onDeman Revalidate
        tags:['products']
    },
});

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}