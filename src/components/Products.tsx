import type React from "react"
import { useState, useRef, useEffect } from "react"
import {
  Monitor,
  Cpu,
  Gauge,
  Zap,
  Network,
  Smartphone,
  Cloud,
  Database,
  Code,
  BarChart3,
  Settings,
  Layers,
} from "lucide-react"

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)

  const categories = [
    { id: "all", label: "All Products" },
    { id: "industrial", label: "Industrial" },
    { id: "software", label: "IT & Software" },
    { id: "automation", label: "Automation" },
  ]

  const products = [
    // Industrial Products
    {
      id: 1,
      category: "industrial",
      icon: Gauge,
      title: "Condition Monitoring & I/O",
      description:
        "Advanced monitoring systems for real-time equipment condition assessment and input/output management.",
      features: ["Real-time Monitoring", "Predictive Analytics", "Alert Systems", "Data Logging"],
      image: "/industrial-monitoring-equipment.jpg",
    },
    {
      id: 2,
      category: "industrial",
      icon: Network,
      title: "Distributed Control Systems",
      description: "Comprehensive DCS solutions for process control and automation in industrial environments.",
      features: ["Process Control", "System Integration", "HMI Integration", "Safety Systems"],
      image: "/control-systems-dashboard.jpg",
    },
    {
      id: 3,
      category: "industrial",
      icon: Zap,
      title: "Drives & Motion Control",
      description: "High-performance motor drives and motion control systems for precise industrial operations.",
      features: ["Variable Speed Drives", "Servo Systems", "Motion Controllers", "Energy Efficiency"],
      image: "/motor-drives-and-gears.jpg",
    },
    {
      id: 4,
      category: "industrial",
      icon: Monitor,
      title: "Human Machine Interfaces",
      description: "Intuitive HMI solutions for effective human-machine interaction in industrial settings.",
      features: ["Touch Interfaces", "SCADA Integration", "Custom Dashboards", "Remote Access"],
      image: "/industrial-touch-screen-interface.jpg",
    },
    {
      id: 5,
      category: "industrial",
      icon: Cpu,
      title: "Industrial Sensors & Networks",
      description: "Comprehensive sensor solutions and industrial networking for smart manufacturing.",
      features: ["Smart Sensors", "Wireless Networks", "IoT Integration", "Data Acquisition"],
      image: "/industrial-sensors-and-networking.jpg",
    },

    // Software Products
    {
      id: 6,
      category: "software",
      icon: Cloud,
      title: "SaaS Services",
      description: "Scalable cloud-based software solutions designed for modern business operations.",
      features: ["Cloud Hosting", "Subscription Models", "Multi-tenant Architecture", "API Integration"],
      image: "/cloud-computing-services.png",
    },
    {
      id: 7,
      category: "software",
      icon: Settings,
      title: "Manufacturing Execution Systems",
      description:
        "Comprehensive MES solutions for production planning, quality management, and operational excellence.",
      features: ["Production Planning", "Quality Control", "Inventory Management", "Real-time Analytics"],
      image: "/manufacturing-execution-system.jpg",
    },
    {
      id: 8,
      category: "software",
      icon: Code,
      title: "Application Development Tools",
      description: "Professional development frameworks and tools for creating robust industrial applications.",
      features: ["Custom Frameworks", "Development IDE", "Testing Tools", "Deployment Solutions"],
      image: "/software-development-tools.png",
    },
    {
      id: 9,
      category: "software",
      icon: BarChart3,
      title: "Design & Operations Software",
      description: "Specialized software for engineering design, operations planning, and workflow optimization.",
      features: ["CAD Integration", "Workflow Management", "Design Tools", "Process Optimization"],
      image: "/engineering-design-software.jpg",
    },

    // Automation Products
    {
      id: 10,
      category: "automation",
      icon: Layers,
      title: "Process Automation Systems",
      description: "Complete automation solutions for industrial processes and manufacturing operations.",
      features: ["PLC Systems", "SCADA", "Process Control", "System Integration"],
      image: "/process-automation-systems.jpg",
    },
    {
      id: 11,
      category: "automation",
      icon: Database,
      title: "Data Management Systems",
      description: "Advanced data collection, storage, and analysis systems for industrial automation.",
      features: ["Data Acquisition", "Real-time Processing", "Analytics Engine", "Reporting Tools"],
      image: "/data-management-dashboard.jpg",
    },
    {
      id: 12,
      category: "automation",
      icon: Smartphone,
      title: "Mobile Automation Apps",
      description: "Mobile applications for remote monitoring and control of automated industrial systems.",
      features: ["Remote Monitoring", "Control Interface", "Alert Notifications", "Data Visualization"],
      image: "/mobile-automation-app-interface.jpg",
    },
  ]

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  const handleCategoryChange = (categoryId: string) => {
    setIsLoading(true)
    setActiveCategory(categoryId)

    // Simple loading state to smooth transitions
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
                  className={`bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 group cursor-pointer transform hover:-translate-y-2 hover:scale-105 ${isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                  style={{
                    transitionDelay: isPageLoaded ? `${700 + index * 100}ms` : "0ms",
                    transitionDuration: "600ms",
                  }}
                >
                  {/* Product Image */}
                  <div className="h-48 bg-gray-800 overflow-hidden relative">
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
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                          product.category === "software"
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
                          className={`text-xs font-medium px-2 py-1 rounded-full ${
                            product.category === "industrial"
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
                            className={`w-1.5 h-1.5 rounded-full ${
                              product.category === "software" ? "bg-red-500" : "bg-gray-600"
                            }`}
                          ></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        className={`w-full py-2 rounded-lg font-medium transition-all ${
                          product.category === "software"
                            ? "bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-700 hover:to-orange-600"
                            : "bg-gray-700 text-white hover:bg-gray-600"
                        }`}
                      >
                        Learn More
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
