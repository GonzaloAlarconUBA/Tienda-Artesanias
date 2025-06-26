import Image from "next/image"

export default function Component() {
  return (
    <div className="bg-[#faf3e0] min-h-screen">
      {/* Header */}
      <header className="bg-[#4e342e] text-white py-6 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">Tienda de Artesanías</h1>
        <nav className="hidden md:flex justify-center space-x-16">
          <a href="#" className="text-lg hover:text-[#f4a261] transition-colors">Inicio</a>
          <a href="#productos" className="text-lg hover:text-[#f4a261] transition-colors">Productos</a>
          <a href="#nosotros" className="text-lg hover:text-[#f4a261] transition-colors">Sobre Nosotros</a>
          <a href="#contacto" className="text-lg hover:text-[#f4a261] transition-colors">Contacto</a>
        </nav>
      </header>

      {/* Main */}
      <main className="bg-[#f4a261] py-8 px-4">
        <section id="productos" className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-[#3e2723] mb-6 text-center">Nuestros productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                titulo: "Pulsera Tejida",
                descripcion: "Pulsera macrame tejida a mano, con variables de diseño y colores",
                precio: "$500",
              },
              {
                titulo: "Pulsera de Cuero",
                descripcion: "Pulsera de cuero de vaca australiana virgen alimentada a base de pasto europeo",
                precio: "$800",
              },
              {
                titulo: "Pulsera Grande",
                descripcion: "Pulsera macrame tejida a mano tamaño cobra real, significativo en algunas culturas quechuas",
                precio: "$1000",
              }
            ].map((prod, i) => (
              <div key={i} className="bg-[#4e342e] rounded-lg p-6 text-white">
                <div className="bg-white rounded-lg p-4 mb-4 flex justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={prod.titulo}
                    width={200}
                    height={200}
                    className="rounded object-cover w-full max-w-[200px] h-auto"
                  />
                </div>
                <h3 className="text-[#f4a261] text-xl font-serif mb-2 text-center">{prod.titulo}</h3>
                <p className="text-sm leading-relaxed mb-4 text-center">{prod.descripcion}</p>
                <p className="text-[#3e2723] font-bold text-lg text-center bg-[#f4a261] rounded py-1">{prod.precio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="nosotros" className="mt-12 max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-[#3e2723] mb-4 text-center">Sobre Nosotros</h2>
          <p className="text-[#3e2723] text-base text-justify leading-relaxed px-2">
            Somos un pequeño emprendimiento que inició en 2015 en la plaza Grigera de Lomas de Zamora. Todos nuestros productos están hechos con amor y experiencia tradicional de nuestra familia del norte. Al regresar de la pandemia, nos mudamos a Las Toninas y ampliamos nuestra producción, manteniendo la atención personalizada a quienes nos recomiendan.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="bg-[#4e342e] text-white py-6 px-4 text-center">
        <h3 className="text-xl font-serif mb-2">Contactanos:</h3>
        <p className="text-base">Instagram: Artesanias___</p>
        <p className="text-base">Número: 11 ****-****</p>
      </footer>
    </div>
  )
}
