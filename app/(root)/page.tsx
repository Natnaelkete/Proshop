import ProductList from '@/components/shared/product/product-list';
import { Button } from '@/components/ui/button';
import sampleData from '@/db/sample-data';
import { getLatestProduct } from '@/lib/actions/product.actions';

const Homepage = async () => {
  const sampleData = await getLatestProduct();
  return <ProductList data={sampleData} title='Newest Arrival' limit={4} />;
};

export default Homepage;
