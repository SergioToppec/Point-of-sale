import { FaTimes, FaSyncAlt } from "react-icons/fa"
import ExportarPDFExcel from "../../components/exportar-pdf-excel"

const RegistroClientesModal = ({ isOpen, onClose }) => {
  const clients = [
    {
      codigo: "CTE0001",
      razonSocial: "PÚBLICO GENERAL",
      rfc: "XAXX010101000",
      domicilio: "97279",
      regimen: "601",
    },
    {
      codigo: "CTE0002",
      razonSocial: "Javier Eduardo Chi",
      rfc: "XAXX010101000",
      domicilio: "97279",
      regimen: "601",
    },
    {
      codigo: "CTE0003",
      razonSocial: "Yareli Can",
      rfc: "XAXX010101000",
      domicilio: "97279",
      regimen: "601",
    },
    {
      codigo: "CTE0004",
      razonSocial: "Luis Fernando López",
      rfc: "XAXX010101000",
      domicilio: "97278",
      regimen: "605",
    },
    {
      codigo: "CTE0005",
      razonSocial: "Ana María Torres",
      rfc: "XAXX010101000",
      domicilio: "97276",
      regimen: "603",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="bg-white rounded-lg shadow-xl w-[800px] max-w-4xl mx-4">
        {/* Header algo chill */}
        <div className="bg-azulOscuro text-white p-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg font-bold">Registro de clientes</h3>
          <button onClick={onClose} className="text-white hover:text-gray-200">
            <FaTimes />
          </button>
        </div>

        {/* Content xc*/}
        <div className="p-6">
          {/* Botón Actualizar :C*/}
          <div className="flex justify-end items-center mb-4">
            <button className="bg-azulOscuro hover:bg-[#314d71] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center gap-2">
              <FaSyncAlt /> Actualizar
            </button>
          </div>

          
          <div className="mb-6 rounded-lg overflow-hidden border border-gray-300 max-h-[250px] overflow-y-auto hide-scrollbar">
            <table className="w-full text-sm">
              <thead className="bg-azulOscuro text-white sticky top-0 z-10">
                <tr>
                  <th className="p-3 text-center font-medium">Código</th>
                  <th className="p-3 text-center font-medium">Razón social</th>
                  <th className="p-3 text-center font-medium">RFC</th>
                  <th className="p-3 text-center font-medium">Domicilio</th>
                  <th className="p-3 text-center font-medium">Régimen</th>
                </tr>
              </thead>
              <tbody>
                {clients.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      No hay clientes para mostrar.
                    </td>
                  </tr>
                ) : (
                  clients.map((client, index) => (
                    <tr key={index} className="border-t border-gray-200">
                      <td className="p-3 text-center">{client.codigo}</td>
                      <td className="p-3 text-center">{client.razonSocial}</td>
                      <td className="p-3 text-center">{client.rfc}</td>
                      <td className="p-3 text-center">{client.domicilio}</td>
                      <td className="p-3 text-center">{client.regimen}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Exportar y Cancelar en uno jajaa*/}
          <div className="flex justify-between items-end">
            <ExportarPDFExcel data={clients} fileName="registro-clientes" />
            <button
              onClick={onClose}
              className="bg-rojoFuerte hover:bg-[#92110f] text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistroClientesModal
