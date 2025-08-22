import SearchBar from "./components/SearchBar";
import ClientsTable from "./components/ClientsTable";
import Buttons from "./components/Buttons";
import { useState } from "react";



//Agregar validación para evitar que se pueda agregar un cliente con el mismo RFC y razón social
//Hace falta un backend para que se pueda hacer la validación de los datos, apurate arturo
export default function Clients() {

 let clientsTableRef = null;

 const handleSearch = (query) => {
  if (clientsTableRef && clientsTableRef.handleSearch) {
    clientsTableRef.handleSearch(query);
  }
};
  
  return (
    <div className="flex flex-row w-full min-h-full bg-gray-50 ">
      <div className="flex flex-col flex-[1] max-w-[70vw] min-w-[60vw]">
      <div className="sticky top-0 z-10 ">
        <div className="flex items-center justify-center h-12">
          <SearchBar onSearch={handleSearch}/>
        </div>
        <div className="flex-1 mt-8  ">
          <ClientsTable ref={ref => (clientsTableRef = ref)}/>
        </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center justify-center bg-slate-50">
        <Buttons />
        <div className="flex flex-col items-center justify-center bg-slate-50">
          
          </div>
      </div>
      
    </div>
  );
}
