import Card from "./components/Card";

function App() {
  const cards = [
    {
      id: 1,
      name: "PRODUCT 1",
      price: "100,000원",
      imageUrl: "https://picsum.photos/id/237/300/200",
    },
    {
      id: 2,
      name: "PRODUCT 2",
      price: "120,000원",
      imageUrl: "https://picsum.photos/id/238/300/200",
    },
    {
      id: 3,
      name: "PRODUCT 3",
      price: "80,000원",
      imageUrl: "https://picsum.photos/id/239/300/200",
    },
    {
      id: 4,
      name: "PRODUCT 4",
      price: "150,000원",
      imageUrl: "https://picsum.photos/id/240/300/200",
    },
    {
      id: 5,
      name: "PRODUCT 5",
      price: "95,000원",
      imageUrl: "https://picsum.photos/id/241/300/200",
    },
    {
      id: 6,
      name: "PRODUCT 6",
      price: "110,000원",
      imageUrl: "https://picsum.photos/id/242/300/200",
    },
  ];

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">상품 리스트</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Card
            key={card.id}
            name={card.name}
            price={card.price}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
