import FilterProductTable from "./components/FilterProductTable";
import { PRODUCTS } from "./constants";

export default function App() {
  return <FilterProductTable products={PRODUCTS} />;
}
