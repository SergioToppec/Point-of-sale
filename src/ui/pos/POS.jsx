import Options from "./components/Options";
import Products from "./components/Products";
import SaleSummary from "./components/SaleSummary";

export default function POS() {
  return (
    <div className="grid grid-cols-3 gap-8 p-4 min-h-full">
      <div className="col-span-2 flex flex-col gap-12">
         <Options/>
         <Products />
      </div>
      <div className="col-span-1">
        <SaleSummary />
      </div>
    </div>
  );
}
