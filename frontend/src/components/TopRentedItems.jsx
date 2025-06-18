export default function TopRentedItems() {
    const items = [
      { id: 1, name: "Camera", price: "1000 LKR/day", img: "https://via.placeholder.com/150" },
      { id: 2, name: "Drill Machine", price: "800 LKR/day", img: "https://via.placeholder.com/150" },
      { id: 3, name: "Projector", price: "1200 LKR/day", img: "https://via.placeholder.com/150" },
    ];
  
    return (
      <section>
        <h2 className="text-xl font-semibold mb-4">Top Rented Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.id} className="border p-4 rounded-xl shadow">
              <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded" />
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  