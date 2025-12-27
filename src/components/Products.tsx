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
  const [isDetailAnimating, setIsDetailAnimating] = useState(false)
  
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
    {
      id: 2,
      category: "industrial",
      icon: Network,
      title: "Locomotive Direction Signalling System",
      description: "Advanced direction signaling system for locomotives with dual-side LED indication and sensor-based detection for accurate blade direction.",
      features: [
        "Accurate points blade direction indication",
        "Sensor based detection system",
        "Dual side indication",
        "High visibility during day and night operation",
        "Sleek design",
        "Water resistance",
      ],
      image: "./locomotive_signal.png",
      overview: {
        summary: "The Locomotive Direction Signalling System is a state-of-the-art signaling solution designed specifically for railway point indication. This system provides clear, reliable visual indication of track point positions through an innovative dual-sided LED display system with sensor-based detection technology.",
        keyBenefits: [
          "Enhanced safety with accurate real-time direction indication",
          "Improved visibility in all lighting conditions",
          "Reliable sensor-based detection eliminates manual errors",
          "Weather-resistant design for outdoor railway environments"
        ],
        applications: [
          "Railway point and switch indication",
          "Yard signaling systems",
          "Junction control visualization",
          "Track direction monitoring"
        ]
      },
      subProducts: [
        {
          id: 21,
          icon: Network,
          title: "Direction Indicator Panel",
          description: "Primary LED-based direction indicator with arrow pattern for clear visual guidance.",
          features: [
            "High-brightness LED array in arrow formation",
            "Green LED indication for active direction",
            "Weather-resistant enclosure",
            "Wide viewing angle visibility",
            "Low power consumption LED technology",
            "Durable mounting hardware included",
          ],
          image: "./locomotive_signal.png",
        }
      ],
    },
    {
      id: 3,
      category: "industrial",
      icon: Zap,
      title: "Wireless Speed & Safety System",
      description: "Comprehensive wireless monitoring system featuring speed sensing, laser-based collision avoidance, wireless nodes, and control panel for industrial safety applications.",
      features: [
        "Wireless speed monitoring with LCD display",
        "Laser-based collision avoidance up to 10m",
        "Long-range wireless data transmission",
        "Centralized control panel with alert system",
      ],
      image: "./wireless_speed.jpg",
      overview: {
        summary: "The Wireless Speed & Safety System is an integrated industrial safety solution that combines multiple wireless sensing technologies to provide comprehensive monitoring and collision avoidance. This modular system includes speed sensors, laser-based proximity detection, wireless communication nodes, and a centralized control panel, all working together to enhance workplace safety and prevent accidents in industrial environments.",
        keyBenefits: [
          "Real-time speed monitoring with programmable alerts",
          "Advanced collision avoidance with laser technology",
          "Wireless architecture eliminates complex cabling",
          "Scalable system architecture for various facility sizes"
        ],
        applications: [
          "Industrial vehicle speed monitoring",
          "Warehouse collision prevention systems",
          "Material handling equipment safety",
          "Automated guided vehicle (AGV) safety systems"
        ]
      },
      subProducts: [
        {
          id: 31,
          icon: Zap,
          title: "Wireless Speed Sensor",
          description: "Proximity-based speed sensor with LCD display and wireless over-speed alert capabilities.",
          features: [
            "Principle of Operation: Proximity Sensor",
            "Speed Range: 300cm/s",
            "Operating Voltage: 12 – 24V",
            "Operating Current: <300mA",
            "Display: Character LCD",
            "Wireless Over-Speed Alert",
            "Programmable Over-Speed Limit",
          ],
          image: "./wireless_speed.jpg",
        },
        {
          id: 32,
          icon: Database,
          title: "Wireless Laser Collision Avoidance System",
          description: "Advanced laser-based detection system for obstacle detection and collision prevention.",
          features: [
            "Detection range up to 10m",
            "High frame rate (up to 1000Hz Adjustable)",
            "Low power consumption",
            "Higher accuracy and frequency",
            "Richer Interface – UART",
            "Light Weight: 50gm",
            "FOV: 3°(3 degrees)",
            "Ambient light resistance (Up to 100Klux)",
            "Wide range of temperature adaptation and voltage input",
          ],
          image: "./laser_collision.jpg",
        },
        {
          id: 33,
          icon: Network,
          title: "Wireless Nodes",
          description: "Long-range wireless communication modules for reliable data transmission across industrial facilities.",
          features: [
            "Long-distance wireless transmission up to 200m in open space",
            "Baud rate of 9,600bps in the air",
            "Perfect replacement for Bluetooth in short-distance data transmission",
            "Working frequency 433.4-473.0MHz",
            "Maximum 100mW transmitting power",
            "3.2-5.5V low voltage power supply",
          ],
          image: "./wireless_nodes.jpg",
        },
        {
          id: 34,
          icon: Settings,
          title: "Wireless Control Panel",
          description: "Central control unit for receiving wireless data and generating immediate alerts.",
          features: [
            "Wireless Over-Speed Data Reception",
            "Low Latency <2ms",
            "Operating Voltage: 12-24V",
            "Operating Current: <800mA",
            "Immediate Alert Signal Generation",
            "Data Retention until Acknowledged",
            "Multi-channel monitoring capability",
          ],
          image: "./control_panel.jpg",
        },
      ],
    },
  ]

  const filteredProducts = activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return
    setIsLoading(true)
    setActiveCategory(categoryId)
    setTimeout(() => {
      setIsLoading(false)
    }, 300)
  }

  useEffect(() => {
    if (!isPageLoaded) {
      const timer = setTimeout(() => {
        setIsPageLoaded(true)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isPageLoaded])

  // Scroll spy effect
  useEffect(() => {
    if (!selectedProduct) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150

      const sections = [
        { id: "overview", ref: overviewRef },
        { id: "components", ref: componentsRef }
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop
          if (scrollPosition >= offsetTop) {
            if (activeSection !== section.id) {
              setActiveSection(section.id)
            }
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [selectedProduct, activeSection])

  const scrollToSection = (sectionId) => {
    const refs = {
      overview: overviewRef,
      components: componentsRef
    }
    
    const ref = refs[sectionId]
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop - 100
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
    }
  }

  const handleProductClick = (product) => {
    setIsDetailAnimating(false)
    setSelectedProduct(product)
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
    
    // Trigger animation after a brief delay
    setTimeout(() => {
      setIsDetailAnimating(true)
    }, 100)
  }

  const handleBackToProducts = () => {
    setIsDetailAnimating(false)
    setTimeout(() => {
      setSelectedProduct(null)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 300)
  }

  // Product Detail View
  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-black" style={{ scrollBehavior: "smooth" }}>
        {/* Header */}
        <div className={`sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-700 ${
          isDetailAnimating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <button
                onClick={handleBackToProducts}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="text-sm sm:text-base">Back to Products</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Horizontal Scroll */}
        <div className={`lg:hidden sticky top-16 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-700 delay-100 ${
          isDetailAnimating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}>
          <div className="overflow-x-auto">
            <nav className="flex space-x-2 px-4 py-3 min-w-max">
              {[
                { id: "overview", label: "Overview" },
                { id: "components", label: "Components & Specifications" }
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
            <div className={`hidden lg:block w-64 flex-shrink-0 transition-all duration-700 delay-200 ${
              isDetailAnimating ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              <div className="sticky top-24">
                <nav className="space-y-1">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "components", label: "Components & Specifications" }
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
            <div className={`flex-1 space-y-12 lg:space-y-16 transition-all duration-700 delay-300 ${
              isDetailAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
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

              {/* Components & Specifications Section */}
              <section ref={componentsRef} className="scroll-mt-32 lg:scroll-mt-24">
                <div ref={specificationsRef} className="scroll-mt-32 lg:scroll-mt-24">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">System Components & Specifications</h2>
                  <div className="space-y-6 sm:space-y-8">
                    {selectedProduct.subProducts?.map((subProduct, index) => (
                      <div
                        key={subProduct.id}
                        className={`bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 ${
                          index % 2 === 0 ? "lg:flex" : "lg:flex lg:flex-row-reverse"
                        }`}
                      >
                        <div className="lg:w-1/2 h-64 sm:h-80 lg:h-auto bg-gray-800 overflow-hidden relative">
                          <img
                            src={subProduct.image || "/placeholder.svg"}
                            alt={subProduct.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                              <subProduct.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">{subProduct.title}</h3>
                          </div>

                          <p className="text-sm sm:text-base text-gray-400 mb-6">{subProduct.description}</p>

                          <div className="space-y-3">
                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Specifications:</p>
                            <ul className="space-y-2 sm:space-y-3">
                              {subProduct.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="text-sm sm:text-base text-gray-300 flex items-start space-x-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
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
                  onClick={() => handleProductClick(product)}
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