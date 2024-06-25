export default function Banner() {
  return (
    <div
      className="bg-cover bg-center h-96 flex items-center justify-center text-white"  // Augmentation de la hauteur
      style={{ 
        backgroundImage: "url('./assets/banner.webp')",
        backgroundSize: "cover",       // Assure que l'image couvre tout le conteneur
        backgroundPosition: "center",  // Centre l'image
        height: "400px"                // Augmente la hauteur
      }}
    >
      <div className="text-center bg-black bg-opacity-50 p-4 rounded">
        <h1 className="text-4xl font-bold">Découvrez nos Montres de Luxe</h1>
        <p className="mt-2">Des collections exclusives à des prix exceptionnels.</p>
      </div>
    </div>
  );
}
