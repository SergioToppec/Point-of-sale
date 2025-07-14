"use client"

import { useEffect } from "react"
import revotec from "@/assets/icons/revotec.svg"
import { useNavigate } from "react-router-dom"
import "@/index.css" 

const RedirectingLoader = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard/pos")
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-10 rounded-lg shadow-lg flex flex-col items-center gap-6 min-w-[300px]">
        <div className="relative w-16 h-16 overflow-hidden">
          <img
            src={revotec || "/placeholder.svg"}
            alt="Revotec Logo"
            className="w-full h-full object-contain relative z-10"
          />
          
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine z-20" />
        </div>
        <p className="text-white font-semibold text-lg">Redirigiendo a caja</p>
      </div>
    </div>
  )

}

export default RedirectingLoader
