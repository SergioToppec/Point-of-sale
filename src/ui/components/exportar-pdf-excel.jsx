"use client"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import * as XLSX from "xlsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilePdf, faFileExcel } from "@fortawesome/free-solid-svg-icons"
<<<<<<< HEAD
import RevotecLogo from "@/assets/icons/RevotecLogo.svg"
=======
>>>>>>> 8b6c45a0308b0046472df813055dfa9b9021a159

// AQUI CCOMIENZA LO BUENO XD

export default function ExportarPDFExcel({ data, fileName = "export" }) {
  const exportarPDF = () => {
    const doc = new jsPDF()
    const columns = Object.keys(data[0] || {}).map((key) => ({ header: key, dataKey: key }))
    autoTable(doc, {
      columns,
      body: data,
      styles: { fontSize: 8 },
    })
    doc.save(`${fileName}.pdf`)
  }

  const exportarExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1")
    XLSX.writeFile(wb, `${fileName}.xlsx`)
  }

  return (
    <div className="relative border-2 border-gray-300 rounded-2xl px-4 py-3 bg-white w-[240px]">
      <div className="mb-2 text-left">
        <h2 className="text-base font-bold text-[#395886]">Exportar como:</h2>
      </div>
      <div className="absolute left-0 right-0 h-0.5 bg-[#395886] rounded-full" style={{ top: "36px" }} />
      <div className="flex gap-4 justify-start items-center pt-[15px]">
        <button onClick={exportarExcel} className="transition-transform hover:scale-110 cursor-pointer">
          <FontAwesomeIcon icon={faFileExcel} style={{ color: "#33C481" }} className="text-4xl" />
        </button>
        <button onClick={exportarPDF} className="transition-transform hover:scale-110 cursor-pointer">
          <FontAwesomeIcon icon={faFilePdf} style={{ color: "#FE5858" }} className="text-4xl" />
        </button>
      </div>
    </div>
  )
}
