import SidebarGeneral from "./SidebarGeneral";
import GeneralSettingsForm from "@/modules/settings/components/GeneralSettings/GeneralSettingsForm";
import SalesForm from "@/modules/settings/components/GeneralSettings/SalesForm";
import InventoryForm from "@/modules/settings/components/GeneralSettings/InventoryForm";
import { useState } from "react";
export default function SettingsForm({ onClose }) {
  const [selected, setSelected] = useState("general");
  function renderContent() {
    switch (selected) {
      case "general":
        return <GeneralSettingsForm />;
      case "ventas":
        return <SalesForm />;
      case "inventario":
        return <InventoryForm />;
      default:
        return null;
    }
  }
  return (
    <div className="flex flex-row h-full w-full">
      <aside className="flex h-[463px]">
        <SidebarGeneral selected={selected} onSelect={setSelected} />
      </aside>
      <section className="flex flex-1 flex-col items-center">
        {renderContent()}
      </section>
    </div>
  );
}