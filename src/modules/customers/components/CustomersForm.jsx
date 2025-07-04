export default function CustomersForm() {
  return (
    <form>
      <div>

          <h1>Agregar nuevo cliente</h1>

        <div className="grid grid-col border border-azulOscuro rounded-lg">
          <div>
            <label className=" bg-azulOscuro w-64 text-white">Razón social</label>
            <input type="string" className="flex-1 border border-gray-400"/>
          </div>
          <div>
            <label>RFC</label>
            <input type="string" />
          </div>
          <div>
            <label>Domicilio</label>
            <input type="string" />
          </div>
          <div>
            <label>Regimen</label>
            <input type="string" />
          </div>
        </div>
      </div>
      <div>
        <button type="button" className="bg-rojoFuerte text-white">Cancelar</button>
        <button type="button" className="bg-azulOscuro text-white">Guardar</button>
      </div>
    </form>
  );
}
