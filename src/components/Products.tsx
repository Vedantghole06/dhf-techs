import React, { useState, useRef, useEffect } from "react"
import {
  Monitor,
  Zap,
  Network,
  Smartphone,
  Cloud,
  Database,
  Settings,
  ArrowLeft
} from "lucide-react"

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [activeSection, setActiveSection] = useState("overview")
  
  const overviewRef = useRef(null)
  const componentsRef = useRef(null)
  const specificationsRef = useRef(null)

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
      overview: {
        summary: "The Loco Vision System is a comprehensive monitoring solution specifically designed for locomotive applications. This integrated system combines cutting-edge video transmission technology with robust hardware components to provide real-time visibility and safety enhancement for railway operations.",
        keyBenefits: [
          "Enhanced operational safety through real-time monitoring",
          "Reduced maintenance costs with preventive monitoring",
          "Improved decision-making with HD video feeds",
          "Scalable system architecture for various locomotive types"
        ],
        applications: [
          "Freight locomotive monitoring",
          "Passenger train safety systems",
          "Shunting operations visibility",
          "Remote locomotive diagnostics"
        ]
      },
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

  const handleCategoryChange = (categoryId) => {
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

  // Scroll spy effect
  useEffect(() => {
    if (!selectedProduct) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      const sections = [
        { id: "overview", ref: overviewRef },
        { id: "components", ref: componentsRef },
        { id: "specifications", ref: specificationsRef }
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [selectedProduct])

  const scrollToSection = (sectionId) => {
    const refs = {
      overview: overviewRef,
      components: componentsRef,
      specifications: specificationsRef
    }
    
    const ref = refs[sectionId]
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 100
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  // Product Detail View
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-black">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm sm:text-base">Back to Products</span>
              </button>
              <div className="flex space-x-2 sm:space-x-3 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-gray-700 transition-all">
                  Download
                </button>
                <button className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg text-xs sm:text-sm font-medium hover:from-red-700 hover:to-orange-600 transition-all">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Horizontal Scroll */}
        <div className="lg:hidden sticky top-16 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <div className="overflow-x-auto">
            <nav className="flex space-x-2 px-4 py-3 min-w-max">
              {[
                { id: "overview", label: "Overview" },
                { id: "components", label: "Components" },
                { id: "specifications", label: "Specifications" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 text-sm ${
                    activeSection === item.id
                      ? "bg-red-600 text-white font-medium"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="flex gap-8">
            {/* Left Sidebar - Navigation (Desktop Only) */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24">
                <nav className="space-y-1">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "components", label: "Components" },
                    { id: "specifications", label: "Specifications" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeSection === item.id
                          ? "bg-red-600 text-white font-medium"
                          : "text-gray-400 hover:text-white hover:bg-gray-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-12 lg:space-y-16">
              {/* Overview Section */}
              <section ref={overviewRef} className="scroll-mt-32 lg:scroll-mt-24">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r from-red-600/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <selectedProduct.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{selectedProduct.title}</h1>
                    <p className="text-gray-400 text-sm sm:text-base mt-1">{selectedProduct.description}</p>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-xl p-4 sm:p-6 lg:p-8 border border-gray-800">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Overview</h2>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
                    {selectedProduct.overview.summary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6 lg:mt-8">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Key Benefits</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedProduct.overview.keyBenefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Applications</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {selectedProduct.overview.applications.map((application, index) => (
                          <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0"></div>
                            <span className="text-sm sm:text-base text-gray-300">{application}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Components Section */}
              <section ref={componentsRef} className="scroll-mt-32 lg:scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">System Components</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {selectedProduct.subProducts?.map((subProduct) => (
                    <div
                      key={subProduct.id}
                      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300"
                    >
                      <div className="h-40 sm:h-48 bg-gray-800 overflow-hidden relative">
                        <img
                          src={subProduct.image || "/placeholder.svg"}
                          alt={subProduct.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/modern-tech-product.png"
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <div className="p-4 sm:p-6">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-3">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                            <subProduct.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                          </div>
                          <h3 className="text-base sm:text-xl font-semibold text-white">{subProduct.title}</h3>
                        </div>

                        <p className="text-sm sm:text-base text-gray-400 mb-4">{subProduct.description}</p>

                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Features:</p>
                          <ul className="space-y-1.5 sm:space-y-2">
                            {subProduct.features.slice(0, 4).map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-xs sm:text-sm text-gray-400 flex items-start space-x-2">
                                <div className="w-1 h-1 rounded-full bg-red-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Specifications Section */}
              <section ref={specificationsRef} className="scroll-mt-32 lg:scroll-mt-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Technical Specifications</h2>
                <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                  {selectedProduct.subProducts?.map((subProduct, index) => (
                    <div key={subProduct.id} className={index !== 0 ? "border-t border-gray-800" : ""}>
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                          <subProduct.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 flex-shrink-0" />
                          <h3 className="text-base sm:text-xl font-semibold text-white">{subProduct.title}</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {subProduct.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2 sm:space-x-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                              <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Products Grid View
  return (
    <div className="min-h-screen bg-black pt-16">
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 ${
                  activeCategory === category.id
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
      <section className="py-20">
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
                  className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
                  style={{
                    transitionDelay: isPageLoaded ? `${700 + index * 100}ms` : "0ms",
                  }}
                >
                  <div className="h-64 bg-gray-800 overflow-hidden relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = "/modern-tech-product.png"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600/20 to-orange-500/20 flex items-center justify-center">
                        <product.icon className="w-6 h-6 text-red-400" />
                      </div>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-700 text-gray-300">
                        {categories.find((cat) => cat.id === product.category)?.label}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-medium hover:from-red-700 hover:to-orange-600 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Products