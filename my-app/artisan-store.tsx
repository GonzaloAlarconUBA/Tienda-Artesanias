import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-[#f4a261]">
      {/* Header */}
      <header className="bg-[#4e342e] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-2xl font-serif py-4 border-b border-[#3e2723]">Tienda de Artesanias</h1>
          <nav className="flex justify-center space-x-8 py-4">
            <a href="#" className="hover:text-[#f4a261] transition-colors">
              Inicio
            </a>
            <a href="#" className="hover:text-[#f4a261] transition-colors">
              Productos
            </a>
            <a href="#" className="hover:text-[#f4a261] transition-colors">
              Sobre Nosotros
            </a>
            <a href="#" className="hover:text-[#f4a261] transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Products Section */}
          <section className="mb-8">
            <h2 className="text-[#3e2723] text-xl font-semibold mb-6">Nuestros productos:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Product 1 */}
              <div className="bg-[#4e342e] rounded-lg p-4 text-white">
                <div className="bg-[#faf3e0] rounded-lg p-2 mb-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Pulsera Tejida"
                    width={150}
                    height={150}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <h3 className="text-[#f4a261] font-semibold mb-2">Pulsera Tejida</h3>
                <p className="text-sm mb-4">Pulsera macrame tejida a mano, con variables de diseño y colores</p>
                <p className="text-[#f4a261] font-bold">$500</p>
              </div>

              {/* Product 2 */}
              <div className="bg-[#4e342e] rounded-lg p-4 text-white">
                <div className="bg-[#faf3e0] rounded-lg p-2 mb-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Pulsera de Cuero"
                    width={150}
                    height={150}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <h3 className="text-[#f4a261] font-semibold mb-2">Pulsera de Cuero</h3>
                <p className="text-sm mb-4">
                  Pulsera de cuero de vaca australiana virgen alimentada a base de pasto europeo
                </p>
                <p className="text-[#f4a261] font-bold">$800</p>
              </div>

              {/* Product 3 */}
              <div className="bg-[#4e342e] rounded-lg p-4 text-white">
                <div className="bg-[#faf3e0] rounded-lg p-2 mb-4">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Pulsera Grande"
                    width={150}
                    height={150}
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <h3 className="text-[#f4a261] font-semibold mb-2">Pulsera Grande</h3>
                <p className="text-sm mb-4">
                  Pulsera macrame tejida a mano tamaño cobra real, significativo en algunas culturas quechuas
                </p>
                <p className="text-[#f4a261] font-bold">$1000</p>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-8">
            <h2 className="text-[#3e2723] text-xl font-semibold mb-4">Sobre Nosotros:</h2>
            <p className="text-[#3e2723] leading-relaxed">
              Somos un pequeño emprendimiento que inició en 2015 en la plaza grigera de lomas de zamora, todos nuestros
              productos están hechos con amor y experiencia tradicional de nuestra familia del norte. Al regreso de la
              pandemia pudimos ampliar nuestra producción ya que nos mudamos a las toninas, seguimos brindando nuestra
              atención a todos los clientes que nos dan recomendaciones de producción
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-[#4e342e] text-white p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Contactanos:</h3>
            <div className="space-y-2">
              <p>Instagram: Artesanias_</p>
              <p>Numero: 11 ****-****</p>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="w-80 bg-[#4e342e] text-white p-4">
          <h2 className="text-center text-lg font-semibold mb-4 bg-[#3e2723] p-2 rounded">Tienda de Artesanias</h2>

          <div className="bg-[#f4a261] text-[#3e2723] p-2 rounded mb-4">
            <h3 className="font-semibold">Nuestros productos</h3>
          </div>

          <div className="space-y-4">
            {/* Sidebar Product 1 */}
            <div className="bg-[#3e2723] rounded-lg p-3">
              <div className="flex gap-3">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Pulsera Tejida"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div className="flex-1">
                  <h4 className="text-[#f4a261] text-sm font-semibold">Pulsera Tejida</h4>
                  <p className="text-xs text-gray-300">
                    Pulsera macrame tejida a mano, con variables de diseño y colores
                  </p>
                  <p className="text-[#f4a261] font-bold text-sm">$500</p>
                </div>
              </div>
            </div>

            {/* Sidebar Product 2 */}
            <div className="bg-[#3e2723] rounded-lg p-3">
              <div className="flex gap-3">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Pulsera de Cuero"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div className="flex-1">
                  <h4 className="text-[#f4a261] text-sm font-semibold">Pulsera de Cuero</h4>
                  <p className="text-xs text-gray-300">
                    Pulsera de cuero de vaca australiana virgen alimentada a base de pasto europeo
                  </p>
                  <p className="text-[#f4a261] font-bold text-sm">$800</p>
                </div>
              </div>
            </div>

            {/* Sidebar Product 3 */}
            <div className="bg-[#3e2723] rounded-lg p-3">
              <div className="flex gap-3">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Pulsera Grande"
                  width={60}
                  height={60}
                  className="rounded"
                />
                <div className="flex-1">
                  <h4 className="text-[#f4a261] text-sm font-semibold">Pulsera Grande</h4>
                  <p className="text-xs text-gray-300">
                    Pulsera macrame tejida a mano tamaño cobra real, significativo en algunas culturas quechuas
                  </p>
                  <p className="text-[#f4a261] font-bold text-sm">$1000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar About */}
          <div className="mt-6">
            <h3 className="text-[#f4a261] font-semibold mb-2">Sobre Nosotros:</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Somos un pequeño emprendimiento que inició en 2015 en la plaza grigera de lomas de zamora, todos nuestros
              productos están hechos con amor y experiencia tradicional de nuestra familia del norte. Al regreso de la
              pandemia pudimos ampliar nuestra producción ya que nos mudamos a las toninas, seguimos brindando nuestra
              atención a todos los clientes que nos dan recomendaciones de producción
            </p>
          </div>

          {/* Sidebar Contact */}
          <div className="mt-6">
            <h3 className="text-[#f4a261] font-semibold mb-2">Contactanos:</h3>
            <div className="text-xs text-gray-300 space-y-1">
              <p>Instagram: Artesanias_</p>
              <p>Numero: 11 ****-****</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
