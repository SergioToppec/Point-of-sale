import { FaEdit } from "react-icons/fa";
import { useState, forwardRef, useImperativeHandle } from "react";
import EditClient from "./EditClient";

// Estas constantes representan los datos de los clientes
const clients_data = [
  {
    codigo: "CTE0001",
    razon: "Público general",
    rfc: "XAXX010101001",
    domicilio: "Sm 259 Mz70 Lote 16 Casa 55",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0002",
    razon: "Arturo",
    rfc: "XAXX010101002",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0003",
    razon: "Josupelol",
    rfc: "XAXX010101003",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0004",
    razon: "Sergiotoppec",
    rfc: "XAXX010101004",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0005",
    razon: "lolcitoinsano01",
    rfc: "XAXX010101005",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0006",
    razon: "lolcitoinsano02",
    rfc: "XAXX010101006",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0007 ",
    razon: "lolcitoinsano07",
    rfc: "XAXX010101007",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0008",
    razon: "lolcitoinsano08",
    rfc: "XAXX010101008",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0009",
    razon: "lolcitoinsano09",
    rfc: "XAXX010101009",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0010",
    razon: "lolcitoinsano10",
    rfc: "XAXX010101010",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0011",
    razon: "lolcitoinsano11",
    rfc: "XAXX010101011",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0012",
    razon: "lolcitoinsano12",
    rfc: "XAXX010101012",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0013",
    razon: "lolcitoinsano13",
    rfc: "XAXX010101013",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0014",
    razon: "lolcitoinsano14",
    rfc: "XAXX010101014",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0015",
    razon: "lolcitoinsano15",
    rfc: "XAXX010101015",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0016",
    razon: "lolcitoinsano16",
    rfc: "XAXX010101016",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0017",
    razon: "lolcitoinsano17",
    rfc: "XAXX010101017",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0018",
    razon: "lolcitoinsano18",
    rfc: "XAXX010101018",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
  {
    codigo: "CTE0019",
    razon: "lolcitoinsano19",
    rfc: "XAXX010101019",
    domicilio: "Calle Falsa 123",
    cp: "77539",
    regimen: "601",
  },
];


// Componente ClientsTable que muestra una tabla de clientes
// Permite buscar clientes por código, RFC o razón social
const ClientsTable = forwardRef((props, ref) => {
  const [filteredClients, setFilteredClients] = useState(clients_data);
  const [selectClient, setSelectedClient] = useState(null);
// Permite seleccionar un cliente para editar
// Utiliza useState para manejar el estado del cliente seleccionado
// Utiliza useImperativeHandle para exponer una función de búsqueda al componente padre
  // Permite buscar clientes por código, RFC o razón social

  useImperativeHandle(ref, () => ({
    handleSearch(query) {
      if (!query) {
        setFilteredClients(clients_data);
        return;
      }

      // Convierte la consulta a minúsculas para una búsqueda insensible a mayúsculas
      // Filtra los clientes que coinciden con la consulta en código, RFC o razón social  
      const lowerQuery = query.toLowerCase();
      setFilteredClients(
        clients_data.filter(
          (client) =>
            client.codigo.toLowerCase().includes(lowerQuery) ||
            client.rfc.toLowerCase().includes(lowerQuery) ||
            client.razon.toLowerCase().includes(lowerQuery)
        )
      );
    },
  }));



 //Se cambió la estructura normal de importación de Clients a una constante local
  // para evitar problemas de importación circular y mejorar la legibilidad del código
  return (
    <div className="flex flex-col w-auto h-auto border-[0.5px] border-gray-400 shadow-lg shadow-gray-200 rounded-[10px]">
      <div className="grid bc:grid-cols-2 st:grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6  lg:grid-cols-7 items-center justify-between h-12 rounded-t-lg bg-azulOscuro text-white font-medium">
        <span className="flex items-center justify-center p-2">Código</span>
        <span className="hidden st:flex items-center justify-center px-3">
          Razón social
        </span>
        <span className="hidden  xs:flex items-center justify-center p-2">
          RFC
        </span>
        <span className="hidden sm:flex items-center justify-center p-2">
          Domicilio
        </span>
        <span className="hidden md:flex items-center justify-center p-2">
          C.P.
        </span>
        <span className="hidden lg:flex items-center justify-center p-2">
          Regimen
        </span>
        <span className="hidden bc:flex items-center justify-center ">
          Acción
        </span>
      </div>
      <div className="overflow-y-auto max-h-[28vw] min-h-[80vw] xl:min-h-[33vw] hide-scrollbar">
      {filteredClients.map((item) => (
        <div className="grid bc:grid-cols-2 st:grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 items-center justify-between p-3 h-auto w-full border-b border-gray-300 text-xs font-semibold text-azulOscuro">
          <div className="flex items-center justify-center">{item.codigo}</div>
          <div className="hidden st:flex items-center justify-center break-all px-3">
            {item.razon}
          </div>
          <div className="hidden xs:flex items-center justify-center break-all px-3">
            {item.rfc}
          </div>
          <div className="hidden sm:flex items-center justify-center break-all">
            {item.domicilio}
          </div>
          <div className="hidden md:flex items-center justify-center">
            {item.cp}
          </div>
          <div className="hidden lg:flex items-center justify-center">
            {item.regimen}
          </div>
          <div className="hidden bc:flex items-center justify-center w-auto ">
            <button onClick={() => setSelectedClient(item)} className="">
              <FaEdit size={20} className="text-azulOscuro ml-5" />
            </button>
          </div>
        </div>
      ))}
      </div>
      {selectClient && (
        <EditClient onClose={() => setSelectedClient(false)} />
      )}
    </div>
  );
});

//Se exportó hasta el final, porque en este caso no se necesita exportar antes de definir el componente

  export default ClientsTable;
