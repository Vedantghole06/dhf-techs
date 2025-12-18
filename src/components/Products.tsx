// import type React from "react"
// import { useState, useRef, useEffect } from "react"
// import {
//   Monitor,
//   Zap,
//   Network,
//   Smartphone,
//   Cloud,
//   Database,
//   Settings
// } from "lucide-react"

// const Products: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState("all")
//   const [isLoading, setIsLoading] = useState(false)
//   const [isPageLoaded, setIsPageLoaded] = useState(false)
//   const productsRef = useRef(null)

//   const categories = [
//     { id: "all", label: "All Products" },
//     { id: "industrial", label: "Industrial" },
//   ]

//   const products = [
//     {
//       id: 1,
//       category: "industrial",
//       icon: Monitor,
//       title: "Camera / Transmitter",
//       description: "High performance loco-camera transmitter for live video transmission.",
//       features: [
//         "Full HD 1080P resolution",
//         "Switchable aspect ratio",
//         "High gain antenna",
//         "25mW to 750mW adjustable transmitting power",
//         "Range up to 1km",
//         "Video capturing angle 170°",
//         "Lower latency video transmission approx. 22ms",
//         "5.8GHz operating frequency",
//         "Wide operating voltage 6.5V – 20V DC",
//       ],
//       image: "./loco_cam.png",
//     },

//     {
//       id: 2,
//       category: "industrial",
//       icon: Network,
//       title: "Receiver",
//       description: "Robust receiver unit for reliable low-latency video receiving and output.",
//       features: [
//         "Industry leading H.265 encoding technology",
//         "Onboard 4 antenna for better signal reception",
//         "Lower latency video receiving approx 22ms",
//         "Lag free video feed",
//         "Full OSD display",
//         "Wide operating voltage 6.5V – 20V DC",
//         "Adjustable transmitting power from 22mW to 750mW",
//         "Adjustable dual resolution output via HDMI 720p / 1080p",
//       ],
//       image: "/mnt/data/page2.jpg",
//     },

//     {
//       id: 3,
//       category: "industrial",
//       icon: Smartphone,
//       title: "Loco-Display",
//       description: "Dedicated loco-display for clear monitoring with optimized power draw.",
//       features: [
//         "HD Resolution 1280 x 800",
//         "10.1 inch display size",
//         "Operating voltage 12VDC",
//         "Low power consumption",
//         "High contrast ratio",
//       ],
//       image: "./loco_display.png",
//     },

//     {
//       id: 4,
//       category: "industrial",
//       icon: Settings,
//       title: "Hooter (Siren)",
//       description: "Industrial grade loud siren for audible alerts and warnings.",
//       features: ["110dB industrial grade loud siren"],
//       image: "/mnt/data/page2.jpg",
//     },

//     {
//       id: 5,
//       category: "industrial",
//       icon: Cloud,
//       title: "Solar Charging",
//       description: "Solar charging solution to maximize battery life and provide electrical independence.",
//       features: [
//         "Maintenance free operation",
//         "Maximize battery life",
//         "Electrical power independence",
//       ],
//       image: "/mnt/data/page3.jpg",
//     },

//     {
//       id: 6,
//       category: "industrial",
//       icon: Zap,
//       title: "LED Lighting",
//       description: "High-efficiency LED lighting for night visibility and long service life.",
//       features: [
//         "Long life span",
//         "Night visibility",
//         "Low power consumption",
//         "No UV emission",
//         "Wide operational temperature range",
//       ],
//       image: "/mnt/data/page3.jpg",
//     },

//     {
//       id: 7,
//       category: "industrial",
//       icon: Database,
//       title: "Battery",
//       description: "Sealed maintenance-free battery for industrial applications.",
//       features: [
//         "Industrial segment SMF battery",
//         "7Ah capacity",
//         "Spill free sealed lead acid",
//         "Maintenance free",
//       ],
//       image: "/mnt/data/page3.jpg",
//     },
//   ]

//   const filteredProducts = activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

//   const handleCategoryChange = (categoryId: string) => {
//     setIsLoading(true)
//     setActiveCategory(categoryId)

//     // Simple loading state to smooth transitions
//     setTimeout(() => {
//       setIsLoading(false)
//     }, 300)
//   }

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsPageLoaded(true)
//     }, 100)
//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <div className="min-h-screen bg-black pt-16">
//       {/* Hero Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`text-center mb-16 transition-all duration-1000 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
//           >
//             <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
//               Our <span className="text-red-500">Products</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Cutting-edge industrial and software products designed to revolutionize manufacturing, automation, and
//               digital transformation across industries.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Category Filters */}
//       <section className="py-8 border-b border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//           >
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => handleCategoryChange(category.id)}
//                 disabled={isLoading}
//                 className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 ${activeCategory === category.id
//                   ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
//                   }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Products Grid */}
//       <section className="py-20" ref={productsRef}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {isLoading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
//             </div>
//           ) : (
//             <div
//               className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
//             >
//               {filteredProducts.map((product, index) => (
//                 <div
//                   key={product.id}
//                   className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:scale-105 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//                   style={{
//                     transitionDelay: isPageLoaded ? `${700 + index * 100}ms` : "0ms",
//                     transitionDuration: "600ms",
//                   }}
//                 >
//                   {/* Product Image */}
//                   <div className="h-64 bg-gray-800 overflow-hidden relative">
//                     <img
//                       src={product.image || "/placeholder.svg"}
//                       alt={product.title}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       loading="lazy"
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement
//                         target.src = "/modern-tech-product.png"
//                       }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
//                   </div>

//                   {/* Product Content */}
//                   <div className="p-6">
//                     <div className="flex items-center space-x-3 mb-4">
//                       <div
//                         className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${product.category === "software"
//                           ? "bg-gradient-to-r from-red-600/20 to-orange-500/20"
//                           : "bg-gray-800"
//                           }`}
//                       >
//                         <product.icon
//                           className={`w-6 h-6 ${product.category === "software" ? "text-red-400" : "text-gray-300"}`}
//                         />
//                       </div>
//                       <div>
//                         <span
//                           className={`text-xs font-medium px-2 py-1 rounded-full ${product.category === "industrial"
//                             ? "bg-gray-700 text-gray-300"
//                             : product.category === "software"
//                               ? "bg-red-900/30 text-red-400"
//                               : "bg-orange-900/30 text-orange-400"
//                             }`}
//                         >
//                           {categories.find((cat) => cat.id === product.category)?.label}
//                         </span>
//                       </div>
//                     </div>

//                     <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
//                     <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>

//                     <ul className="space-y-2">
//                       {product.features.map((feature, featureIndex) => (
//                         <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
//                           <div
//                             className={`w-1.5 h-1.5 rounded-full ${product.category === "software" ? "bg-red-500" : "bg-gray-600"}`}
//                           ></div>
//                           <span>{feature}</span>
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Hover Effect */}
//                     <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       <button
//                         className={`w-full py-2 rounded-lg font-medium transition-all ${product.category === "software"
//                           ? "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-700 hover:to-orange-600"
//                           : "bg-gray-700 text-white hover:bg-gray-600"
//                           }`}
//                       >
//                         Learn More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-gray-900/50 to-red-900/20 border-y border-red-500/20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div
//             className={`transition-all duration-1000 delay-700 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
//           >
//             <h3 className="text-3xl font-bold text-white mb-6">Interested in Our Products?</h3>
//             <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
//               Get detailed specifications, pricing, and implementation guidance for our industrial and software
//               products. Our technical team is ready to assist with your specific requirements.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
//                 Request Catalog
//               </button>
//               <button className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
//                 Schedule Demo
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Products


import type React from "react"
import { useState, useRef, useEffect } from "react"
import {
  Monitor,
  Zap,
  Network,
  Smartphone,
  Cloud,
  Database,
  Settings
} from "lucide-react"

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const productsRef = useRef(null)

  const categories = [
    { id: "all", label: "All Products" },
    { id: "industrial", label: "Industrial" },
  ]

  const products = [
    {
      id: 1,
      category: "industrial",
      icon: Monitor,
      title: "Loco Vision System",
      description: "Complete vision and monitoring solution for locomotives with integrated camera, receiver, display and power systems.",
      features: [
        "Full HD video transmission system",
        "Long-range wireless connectivity",
        "Integrated power management",
        "Complete monitoring solution",
      ],
      image: "./loco_cam.png",
      subProducts: [
        {
          id: 11,
          icon: Monitor,
          title: "Camera / Transmitter",
          description: "High performance loco-camera transmitter for live video transmission.",
          features: [
            "Full HD 1080P resolution",
            "Switchable aspect ratio",
            "High gain antenna",
            "25mW to 750mW adjustable transmitting power",
            "Range up to 1km",
            "Video capturing angle 170°",
            "Lower latency video transmission approx. 22ms",
            "5.8GHz operating frequency",
            "Wide operating voltage 6.5V – 20V DC",
          ],
          image: "./loco_cam.png",
        },
        {
          id: 12,
          icon: Network,
          title: "Receiver",
          description: "Robust receiver unit for reliable low-latency video receiving and output.",
          features: [
            "Industry leading H.265 encoding technology",
            "Onboard 4 antenna for better signal reception",
            "Lower latency video receiving approx 22ms",
            "Lag free video feed",
            "Full OSD display",
            "Wide operating voltage 6.5V – 20V DC",
            "Adjustable transmitting power from 22mW to 750mW",
            "Adjustable dual resolution output via HDMI 720p / 1080p",
          ],
          image: "/mnt/data/page2.jpg",
        },
        {
          id: 13,
          icon: Smartphone,
          title: "Loco-Display",
          description: "Dedicated loco-display for clear monitoring with optimized power draw.",
          features: [
            "HD Resolution 1280 x 800",
            "10.1 inch display size",
            "Operating voltage 12VDC",
            "Low power consumption",
            "High contrast ratio",
          ],
          image: "./loco_display.png",
        },
        {
          id: 14,
          icon: Settings,
          title: "Hooter (Siren)",
          description: "Industrial grade loud siren for audible alerts and warnings.",
          features: ["110dB industrial grade loud siren"],
          image: "/mnt/data/page2.jpg",
        },
        {
          id: 15,
          icon: Cloud,
          title: "Solar Charging",
          description: "Solar charging solution to maximize battery life and provide electrical independence.",
          features: [
            "Maintenance free operation",
            "Maximize battery life",
            "Electrical power independence",
          ],
          image: "/mnt/data/page3.jpg",
        },
        {
          id: 16,
          icon: Zap,
          title: "LED Lighting",
          description: "High-efficiency LED lighting for night visibility and long service life.",
          features: [
            "Long life span",
            "Night visibility",
            "Low power consumption",
            "No UV emission",
            "Wide operational temperature range",
          ],
          image: "/mnt/data/page3.jpg",
        },
        {
          id: 17,
          icon: Database,
          title: "Battery",
          description: "Sealed maintenance-free battery for industrial applications.",
          features: [
            "Industrial segment SMF battery",
            "7Ah capacity",
            "Spill free sealed lead acid",
            "Maintenance free",
          ],
          image: "/mnt/data/page3.jpg",
        },
      ],
    },
  ]

  const filteredProducts = activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true)
    setActiveCategory(categoryId)

    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between z-10">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-red-600/20 to-orange-500/20 flex items-center justify-center">
                  <selectedProduct.icon className="w-7 h-7 text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedProduct.title}</h2>
                  <p className="text-gray-400 text-sm mt-1">{selectedProduct.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Sub-Products Grid */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-6">System Components</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedProduct.subProducts?.map((subProduct: any) => (
                  <div
                    key={subProduct.id}
                    className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                  >
                    {/* Sub-Product Image */}
                    <div className="h-48 bg-gray-800 overflow-hidden relative">
                      <img
                        src={subProduct.image || "/placeholder.svg"}
                        alt={subProduct.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/modern-tech-product.png"
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>

                    {/* Sub-Product Content */}
                    <div className="p-5">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-700 flex items-center justify-center">
                          <subProduct.icon className="w-5 h-5 text-gray-300" />
                        </div>
                        <h4 className="text-lg font-semibold text-white">{subProduct.title}</h4>
                      </div>

                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{subProduct.description}</p>

                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Features:</p>
                        <ul className="space-y-1.5">
                          {subProduct.features.map((feature: string, featureIndex: number) => (
                            <li key={featureIndex} className="text-xs text-gray-500 flex items-start space-x-2">
                              <div className="w-1 h-1 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-gray-900 border-t border-gray-800 p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <p className="text-gray-400 text-sm">
                  Complete system with {selectedProduct.subProducts?.length} integrated components
                </p>
                <div className="flex space-x-3">
                  <button className="px-6 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-all">
                    Download Specs
                  </button>
                  <button className="px-6 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-medium hover:from-red-700 hover:to-orange-600 transition-all">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-red-500">Products</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge industrial and software products designed to revolutionize manufacturing, automation, and
              digital transformation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-300 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                disabled={isLoading}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 ${activeCategory === category.id
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:scale-105 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{
                    transitionDelay: isPageLoaded ? `${700 + index * 100}ms` : "0ms",
                    transitionDuration: "600ms",
                  }}
                >
                  {/* Product Image */}
                  <div className="h-64 bg-gray-800 overflow-hidden relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/modern-tech-product.png"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${product.category === "software"
                          ? "bg-gradient-to-r from-red-600/20 to-orange-500/20"
                          : "bg-gray-800"
                          }`}
                      >
                        <product.icon
                          className={`w-6 h-6 ${product.category === "software" ? "text-red-400" : "text-gray-300"}`}
                        />
                      </div>
                      <div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-full ${product.category === "industrial"
                            ? "bg-gray-700 text-gray-300"
                            : product.category === "software"
                              ? "bg-red-900/30 text-red-400"
                              : "bg-orange-900/30 text-orange-400"
                            }`}
                        >
                          {categories.find((cat) => cat.id === product.category)?.label}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>

                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${product.category === "software" ? "bg-red-500" : "bg-gray-600"}`}
                          ></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        className={`w-full py-2 rounded-lg font-medium transition-all ${product.category === "software"
                          ? "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-700 hover:to-orange-600"
                          : "bg-gray-700 text-white hover:bg-gray-600"
                          }`}
                      >
                        View Components ({product.subProducts?.length || 0})
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-red-900/20 border-y border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 delay-700 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Interested in Our Products?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get detailed specifications, pricing, and implementation guidance for our industrial and software
              products. Our technical team is ready to assist with your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Request Catalog
              </button>
              <button className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 active:scale-95">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products