import Card from "@/ui/components/Card";
import cajaImage from "../assets/images/Caja.png";

const products = [
	{ image: cajaImage, title: "Producto 1", subtitle: "$200" },
	{ image: cajaImage, title: "Producto 2", subtitle: "$260" },
	{ image: cajaImage, title: "Producto 3", subtitle: "$30" },
	{ image: cajaImage, title: "Producto 4", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 5", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 6", subtitle: "$200" },
	{ image: cajaImage, title: "Producto 7", subtitle: "$260" },
	{ image: cajaImage, title: "Producto 8", subtitle: "$30" },
	{ image: cajaImage, title: "Producto 9", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 10", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 1", subtitle: "$200" },
	{ image: cajaImage, title: "Producto 2", subtitle: "$260" },
	{ image: cajaImage, title: "Producto 3", subtitle: "$30" },
	{ image: cajaImage, title: "Producto 4", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 5", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 6", subtitle: "$200" },
	{ image: cajaImage, title: "Producto 7", subtitle: "$260" },
	{ image: cajaImage, title: "Producto 8", subtitle: "$30" },
	{ image: cajaImage, title: "Producto 9", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 10", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 2", subtitle: "$260" },
	{ image: cajaImage, title: "Producto 3", subtitle: "$30" },
	{ image: cajaImage, title: "Producto 4", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 5", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 6", subtitle: "$200" },
	{ image: cajaImage, title: "Producto 7", subtitle: "$260" },
	{ image: cajaImage, title: "Producto 8", subtitle: "$30" },
	{ image: cajaImage, title: "Producto 9", subtitle: "$90" },
	{ image: cajaImage, title: "Producto 10", subtitle: "$90" },
];

export default function Products() {
	return (
		<div className="grid grid-cols-4 gap-4 p-2 overflow-y-scroll h-[56vh] hide-scrollbar">
			{products.map((product, index) => (
				<Card
					key={index}
					image={product.image}
					title={product.title}
					subtitle={product.subtitle}
					className="bg-azulClaro shadow-md rounded-lg p-2 h-48 w-auto"
					titleClassName="text-lg text-azulOscuro text-left"
					subtitleClassName="text-sm text-gray-500 text-left"
				/>
			))}
		</div>
	);
}
