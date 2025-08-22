import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "@/index.css"

const GlobalLoader = ({
  message = "Cargando...",
  duration = 2000,
  redirectTo = null,
  logo = "/placeholder.svg",
  onComplete = null,
}) => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete()
      } else if (redirectTo) {
        navigate(redirectTo)
      }
    }, duration)

    return () => clearTimeout(timer)
  }, [navigate, duration, redirectTo, onComplete])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black p-10 rounded-lg shadow-lg flex flex-col items-center gap-6 min-w-[300px]">
        <div className="relative w-16 h-16 overflow-hidden">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain relative z-10"
          />
          <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shine z-20" />
        </div>
        <p className="text-white font-semibold text-lg">{message}</p>
      </div>
    </div>
  )
}

export default GlobalLoader
