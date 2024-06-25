export default function ProductList() {
  const products = [
    { id: 1, name: 'Montre Classique', price: 299, image: 'assets/rolexremontoir.jpg' },
    { id: 2, name: 'Montre Sport', price: 199, image: 'assets/rolex-besoin-remontoir-montre.jpg' },
    { id: 3, name: 'Montre Luxe', price: 499, image: 'assets/rolex.jpg' },
    { id: 4, name: 'Montre Élégante', price: 399, image: 'assets/rolex2.jpg' },
    { id: 5, name: 'Montre Digital', price: 149, image: 'assets/rolex3.webp' },
    { id: 6, name: 'Montre Vintage', price: 349, image: 'assets/unnamed.jpg' },
    { id: 7, name: 'Montre Chronographe', price: 599, image: 'assets/rolexblue.jpg' },
    { id: 8, name: 'Montre Minimaliste', price: 129, image: 'assets/1.jpg' },
    { id: 9, name: 'Montre Automatique', price: 549, image: 'assets/3.webp' },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg text-center">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-lg mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
