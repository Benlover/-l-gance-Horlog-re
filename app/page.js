import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <main className="py-12">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
