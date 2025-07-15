import { set, useForm } from "react-hook-form";

export default function EditClientForm({ onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors.rfc); // Los errores se imprimen en la consola

  const onSubmit = (data) => {
    alert(`Cliente agregado: ${data.razon}`);
    console.log("Datos del cliente:", data); // Aquí puedes manejar los datos del formulario
    onClose(); // Cierra el modal después de enviar el formulario
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col items-start justify-start p-4 ">
        <h1 className="text-azulOscuro font-semibold">Editar información del cliente</h1>
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
                className="flex flex-1 h-full border-[1px] border-gray-400 rounded-tr-lg"
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
                className="flex flex-1 h-full border-[1px] border-gray-400"
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
                className="flex flex-1 h-full border-[1px] border-gray-400"
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
                className="flex flex-1 h-full border-[1px] border-gray-400"
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
                className="flex flex-1 h-full border-[1px] border-gray-400 rounded-br-lg"
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
