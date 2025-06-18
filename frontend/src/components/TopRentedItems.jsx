// export default function TopRentedItems() {
//     const items = [
//       { id: 1, name: "Camera", price: "1000 LKR/day", img: "https://via.placeholder.com/150" },
//       { id: 2, name: "Drill Machine", price: "800 LKR/day", img: "https://via.placeholder.com/150" },
//       { id: 3, name: "Projector", price: "1200 LKR/day", img: "https://via.placeholder.com/150" },
//       { id: 4, name: "Laptop", price: "1500 LKR/day", img: "https://via.placeholder.com/150" },
//       { id: 5, name: "Bike", price: "2000 LKR/day", img: "https://via.placeholder.com/150" },
//       { id: 6, name: "Drone", price: "2500 LKR/day", img: "https://via.placeholder.com/100" }
//     ];
  
//     return (
//       <section>
//         <h2 className="text-xl font-semibold mb-4">Top Rented Items</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {items.map(item => (
//             <div key={item.id} className="border p-10 rounded-xl shadow">
//               <img src={item.img} alt={item.name} className="w-30 h-40 object-cover rounded" />
//               <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
//               <p className="text-sm text-gray-500">{item.price}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   }
  







export default function TopRentedItems() {
  const items = [
    { id: 1, name: "Camera", price: "1000 LKR/day", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Drill Machine", price: "800 LKR/day", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Projector", price: "1200 LKR/day", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Laptop", price: "1500 LKR/day", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Bike", price: "2000 LKR/day", img: "https://via.placeholder.com/150" },
    { id: 6, name: "Drone", price: "2500 LKR/day", img: "https://via.placeholder.com/100" },
    { id: 7, name: "Smartphone", price: "900 LKR/day", img: "https://via.placeholder.com/150" },
    { id: 8, name: "Tablet", price: "1100 LKR/day", img: "https://via.placeholder.com/150" },
    { id: 9, name: "Gaming Console", price: "1800 LKR/day", img: "https://via.placeholder.com/150" },
    { id: 10, name: "Electric Scooter", price: "2200 LKR/day", img: "https://via.placeholder.com/150" }

  ];

  return (
    <section className="px-4 py-6">
      <h2 className="text-xl font-semibold mb-4">Top Rented Items</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map(item => (
          <div key={item.id} className="border p-3 rounded-lg shadow-sm text-center">
            <img src={item.img} alt={item.name} className="w-full h-28 object-cover rounded-md mb-2" />
            <h3 className="text-sm font-medium">{item.name}</h3>
            <p className="text-xs text-gray-500">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
