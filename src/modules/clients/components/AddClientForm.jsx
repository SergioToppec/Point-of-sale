import { set, useForm } from "react-hook-form";

const Existing_Clients = [
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
    razon: "Arturogei",
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

export default function AddClientForm({ onClose }) {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm();

  // Los errores se imprimen en la consola
  console.log(errors.razon); // Los errores se imprimen en la consola
  console.log(errors.rfc); // Los errores se imprimen en la consola
  // Función para manejar el envío del formulario
  // Aquí puedes agregar la lógica para manejar el envío del formulario
  const onSubmit = (data) => {
    // Verifica si el RFC y la razón social ya existen
    const rfcExists = Existing_Clients.some(
      (client) =>
        client.rfc.trim().toLowerCase() === data.rfc.trim().toLowerCase()
    );
    const razonExists = Existing_Clients.some(
      (client) =>
        client.razon.trim().toLowerCase() === data.razon.trim().toLowerCase()
    );

    if (rfcExists) {
      setError("rfc", {
        type: "manual",
        message: "El RFC ya existe",
      });
    }
    if (razonExists) {
      setError("razon", {
        type: "manual",
        message: "La razón social ya existe",
      });
    }
    if (rfcExists || razonExists) {
      alert("Razón social o RFC ya existe"); 
      return;
    }

    // Mensaje de alerta para el usuario


    alert(`Cliente agregado: ${data.razon}`);
    console.log("Datos del cliente:", data); // Aquí puedes manejar los datos del formulario
    onClose(); // Cierra el modal después de enviar el formulario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col items-start justify-start p-4 ">
        <h1 className="text-azulOscuro font-semibold">Agregar nuevo cliente</h1>
      </div>
      <div className="flex flex-col items-center justify-center w-[640px] h-auto">
        <div className="flex flex-col  w-[450px]">
          <div className="flex flex-col h-auto w-auto font-medium ">
            <div className="flex flex-row items-center justify-center h-10 w-full ">
              <label className="flex items-center justify-center h-full w-36 bg-azulOscuro text-white border-[1px] border-azulFuerte rounded-tl-lg">
                Razón social
              </label>
              <input
                type="string"
                className="flex flex-1 h-full border-[1px] pl-4 border-gray-400 rounded-tr-lg"
                onChange={(e) => {
                  setValue(e.target.value);
                  setValue("razon", e.target.value);
                }}
                {...register("razon", {
                  required: "El nombre es obligatorio",
                })}
              />
            </div>
            <div className="flex flex-row items-center justify-center h-10 w-full ">
              <label className="flex items-center justify-center h-full w-36 bg-azulOscuro text-white border-[1px] border-azulFuerte">
                RFC
              </label>
              <input
                type="string"
                onChange={(e) => {
                  setValue(e.target.value);
                  setValue("rfc", e.target.value);
                }}
                {...register("rfc", {
                  required: "El RFC es obligatorio",
                })}
                className="flex flex-1 h-full border-[1px] pl-4 border-gray-400"
                required="El RFC es obligatorio"
                minLength={13}
                maxLength={13}
              />
            </div>
            <div className="flex flex-row items-center justify-center h-10 w-full ">
              <label className="flex items-center justify-center h-full w-36 bg-azulOscuro text-white border-[1px] border-azulFuerte">
                Domicilio
              </label>
              <input
                type="string"
                onChange={(e) => {
                  setValue(e.target.value);
                  setValue("domicilio", e.target.value);
                }}
                {...register("domicilio", {
                  required: "El domicilio es obligatorio",
                })}
                className="flex flex-1 h-full border-[1px] pl-4 border-gray-400"
                required="El domicilio es obligatorio"
              />
            </div>
            <div className="flex flex-row items-center justify-center h-10 w-full ">
              <label className="flex items-center justify-center h-full w-36 bg-azulOscuro text-white border-[1px] border-azulFuerte">
                C.P.
              </label>
              <input
                type="text"
                minLength={5}
                maxLength={5}
                pattern="[0-9]{5}" // solo permite 5 dígitos
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                onChange={(e) => {
                  setValue(e.target.value);
                  setValue("cp", e.target.value);
                }}
                className="flex flex-1 h-full border-[1px] pl-4 border-gray-400"
                {...register("cp", {
                  valueAsNumber: true,
                  min: {
                    value: 10000,
                    message: "El C.P. debe ser un número válido",
                  },

                  required: "El C.P. es obligatorio",
                })}
              />
            </div>
            {errors.razon && (
              <p className="text-rojoFuerte mt-3">{"El nombre es requerido"}</p>
            )}
            <div className="flex flex-row items-center justify-center h-10 w-full ">
              <label className="flex items-center justify-center h-full w-36 bg-azulOscuro text-white border-[1px] border-azulFuerte rounded-bl-lg">
                Regimen
              </label>
              <input
                type="string"
                required="El régimen es obligatorio"
                onChange={(e) => {
                  setValue(e.target.value);
                  setValue("regimen", e.target.value);
                }}
                {...register("regimen", {
                  required: "El régimen es obligatorio",
                })}
                className="flex flex-1 h-full border-[1px] pl-4 border-gray-400 rounded-br-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end h-16 border-b-[2px] border-azulOscuro ">
        <div className="flex justify-between items-center  w-72  mr-6">
          <button
            type="button"
            onClick={onClose}
            className="bg-rojoFuerte text-white w-28 h-7 rounded-lg "
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-azulOscuro text-white w-28 h-7 rounded-lg"
          >
            Guardar
          </button>
        </div>
      </div>
    </form>
  );
}
