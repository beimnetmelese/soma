import { useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

interface FormData {
  name: string;
  phone: string;
  message: string;
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    message: "",
  });

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", phone: "", message: "" });
  };

  const menuItems = [
    {
      id: 1,
      name: "Fresh Italian Salads",
      description: "Seasonal greens with imported Italian olive oil and balsamic",
      price: "ETB 240",
      category: "Starters",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Handmade Tagliatelle",
      description: "Fresh pasta with wild mushrooms and truffle oil",
      price: "ETB 380",
      category: "Pasta",
      image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Italian Café Selection",
      description: "Premium coffee, artisan pastries, and sweet treats",
      price: "ETB 120-280",
      category: "Café",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Osso Buco",
      description: "Milanese-style braised veal shanks with saffron risotto",
      price: "ETB 520",
      category: "Mains",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Wood-Fired Pizza",
      description: "Thin crust pizza with San Marzano tomatoes and fresh mozzarella",
      price: "ETB 320",
      category: "Pizza",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Tiramisu Classico",
      description: "Traditional Italian dessert with espresso-soaked ladyfingers",
      price: "ETB 180",
      category: "Desserts",
      image: "https://images.unsplash.com/photo-1571877227200-0b38eea1f4fa?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60",
      title: "Restaurant Interior",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=60",
      title: "Handmade Pasta",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop&q=60",
      title: "Dining Area",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=60",
      title: "Café Corner",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      title: "Gourmet Dining",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1571266040582-91e3f0e04e1f?w=600&auto=format&fit=crop&q=60",
      title: "Wine Selection",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-[#EFEDE9]"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8A9A5B] to-[#6B8E23] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-serif font-bold text-lg">S</span>
                </div>
                <motion.div
                  className="absolute -inset-1 border border-[#8A9A5B]/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-serif font-bold text-[#5D534A]">
                  SOMA
                </h1>
                <p className="text-xs text-[#8A9A5B]">Restaurant & Café</p>
              </div>
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Menu", "Gallery", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-[#5D534A] hover:text-[#8A9A5B] font-light tracking-wide group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8A9A5B] group-hover:w-full transition-all duration-300"></span>
                  </motion.a>
                ),
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-[#5D534A]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#5D534A]/30 via-[#8A9A5B]/20 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')",
          }}
        ></div>

        {/* Elegant Overlay Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%238A9A5B" fill-opacity="0.1" fill-rule="evenodd"/%3E%3C/svg%3E')] opacity-20 z-10"></div>

        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="w-5 h-5 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-white font-light">5.0 • 1 Review</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white mb-6 tracking-tight"
            >
              <span className="block">SOMA</span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-light mt-4 tracking-widest">
                RESTAURANT & CAFÉ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-lg md:text-xl text-[#EFEDE9] mb-12 max-w-lg mx-auto leading-relaxed font-light"
            >
              Italian-inspired cuisine in the heart of Bole Bulbula
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-3 bg-white text-[#5D534A] rounded-sm font-light tracking-wide overflow-hidden"
              >
                <span className="relative z-10">View Menu</span>
                <div className="absolute inset-0 bg-[#EFEDE9] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-3 bg-transparent border border-white text-white rounded-sm font-light tracking-wide overflow-hidden"
              >
                <span className="relative z-10">Get Directions</span>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-3 bg-transparent border border-white text-white rounded-sm font-light tracking-wide overflow-hidden"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <div className="w-6 h-10 border border-white/30 flex justify-center">
              <div className="w-px h-3 bg-white mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5D534A] mb-6">
                La Nostra Storia
              </h2>
              <div className="w-20 h-px bg-[#8A9A5B] mx-auto mb-8"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop&q=60"
                    alt="Handmade Pasta"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-sm text-[#8A9A5B] tracking-widest">NEW IN BOLE BULBULA</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-serif font-light text-[#5D534A] mb-6">
                  Italian Excellence, <span className="text-[#8A9A5B]">Reimagined</span>
                </h3>
                
                <p className="text-[#5D534A]/80 mb-6 leading-relaxed">
                  SOMA brings authentic Italian-inspired cuisine to Bole Bulbula, 
                  blending traditional techniques with modern elegance. Our passion 
                  for fresh ingredients and handmade pasta defines every dish we create.
                </p>
                
                <p className="text-[#5D534A]/80 mb-8 leading-relaxed">
                  Experience a relaxed yet premium atmosphere where every meal is 
                  crafted with care. From our Italian café selections to our 
                  restaurant's signature dishes, SOMA offers a complete dining 
                  experience in one sophisticated setting.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#FAF8F5] p-2 mr-3">
                      <span className="text-[#8A9A5B] text-lg">🍝</span>
                    </div>
                    <div>
                      <h4 className="font-light text-[#5D534A] mb-1">Handmade Pasta</h4>
                      <p className="text-sm text-[#5D534A]/60">Fresh daily</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#FAF8F5] p-2 mr-3">
                      <span className="text-[#8A9A5B] text-lg">🌿</span>
                    </div>
                    <div>
                      <h4 className="font-light text-[#5D534A] mb-1">Fresh Ingredients</h4>
                      <p className="text-sm text-[#5D534A]/60">Locally sourced</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5D534A] mb-6">
              Menu Highlights
            </h2>
            <p className="text-[#5D534A]/60 max-w-2xl mx-auto mb-4">
              A selection of our signature Italian dishes
            </p>
            <div className="w-20 h-px bg-[#8A9A5B] mx-auto"></div>
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-light bg-white/90 text-[#8A9A5B]">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-light text-[#5D534A] text-lg group-hover:text-[#8A9A5B] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[#8A9A5B] font-light">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#5D534A]/60 text-sm mb-4">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 text-sm font-light bg-transparent border border-[#8A9A5B] text-[#8A9A5B] hover:bg-[#8A9A5B] hover:text-white transition-colors"
                  >
                    Order This Item
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-3 bg-[#5D534A] text-white font-light tracking-wide hover:bg-[#8A9A5B] transition-colors"
            >
              View Full Menu
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-3 bg-[#FAF8F5] px-6 py-3 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-serif font-light text-[#5D534A]">5.0</span>
              <span className="text-[#8A9A5B]">(1 review)</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5D534A] mb-6">
              Guest Experience
            </h2>
            <p className="text-[#5D534A]/60 max-w-2xl mx-auto">
              What our guests are saying about their visit
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#FAF8F5] p-8"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#8A9A5B] rounded-full flex items-center justify-center text-white text-lg font-light mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-light text-[#5D534A]">Anonymous Guest</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-[#D4AF37]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-[#8A9A5B] text-sm ml-2">First visit</span>
                  </div>
                </div>
              </div>
              
              <p className="text-[#5D534A] italic leading-relaxed">
                "Amazing first-time experience. A must-try new spot in Bole Bulbula, 
                with fresh salads, handmade crafted tagliatelle, and a great atmosphere."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#5D534A] mb-6">
              Gallery
            </h2>
            <p className="text-[#5D534A]/60 max-w-2xl mx-auto mb-4">
              A visual journey through SOMA
            </p>
            <div className="w-20 h-px bg-[#8A9A5B] mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden group cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[#5D534A] mb-6">
                Find Us
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#FAF8F5] p-3 mr-4">
                    <span className="text-[#8A9A5B]">📍</span>
                  </div>
                  <div>
                    <h4 className="font-light text-[#5D534A] text-lg mb-1">
                      Address
                    </h4>
                    <p className="text-[#5D534A]">Bole Bulbula, Addis Ababa 1000</p>
                    <p className="text-[#8A9A5B] text-sm mt-1">Plus Code: XQ2P+F8, Addis Ababa</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#FAF8F5] p-3 mr-4">
                    <span className="text-[#8A9A5B]">⏰</span>
                  </div>
                  <div>
                    <h4 className="font-light text-[#5D534A] text-lg mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-[#5D534A]">Open · Closes at 11:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#FAF8F5] p-3 mr-4">
                    <span className="text-[#8A9A5B]">📞</span>
                  </div>
                  <div>
                    <h4 className="font-light text-[#5D534A] text-lg mb-1">
                      Phone Number
                    </h4>
                    <p className="text-2xl font-light text-[#5D534A]">
                      099 926 6392
                    </p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-[#8A9A5B] text-white font-light hover:bg-[#5D534A] transition-colors"
              >
                Get Directions
              </motion.button>

              {/* Map Placeholder */}
              <div className="mt-8 bg-[#FAF8F5] p-8">
                <div className="aspect-[4/3] relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#8A9A5B] flex items-center justify-center mx-auto mb-3">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <p className="text-[#5D534A] font-light">Our Location</p>
                      <p className="text-[#8A9A5B] text-sm mt-1">Bole Bulbula, Addis Ababa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-serif font-light text-[#5D534A] mb-2">
                Make a Reservation
              </h3>
              <p className="text-[#5D534A]/60 mb-6">We look forward to welcoming you</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#5D534A] font-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EFEDE9] focus:outline-none focus:border-[#8A9A5B] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#5D534A] font-light mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EFEDE9] focus:outline-none focus:border-[#8A9A5B] transition-colors"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#5D534A] font-light mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#EFEDE9] focus:outline-none focus:border-[#8A9A5B] transition-colors resize-none"
                    placeholder="Any special requests?"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-[#5D534A] text-white font-light hover:bg-[#8A9A5B] transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-[#EFEDE9]">
                <p className="text-center text-[#5D534A]/60">
                  For immediate assistance, call us at{" "}
                  <span className="text-[#8A9A5B]">099 926 6392</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#5D534A] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#8A9A5B] flex items-center justify-center mr-3">
                  <span className="font-serif font-bold">S</span>
                </div>
                <div>
                  <h2 className="text-xl font-serif">SOMA</h2>
                  <p className="text-sm text-[#EFEDE9]">Restaurant & Café</p>
                </div>
              </div>
              <p className="text-[#EFEDE9] text-sm leading-relaxed">
                Italian-inspired cuisine in the heart of Bole Bulbula, Addis Ababa.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-light mb-4">Contact</h3>
              <div className="space-y-3">
                <p className="text-sm text-[#EFEDE9]">
                  Bole Bulbula, Addis Ababa 1000
                </p>
                <p className="text-sm text-[#EFEDE9]">
                  XQ2P+F8, Addis Ababa
                </p>
                <p className="text-sm text-[#EFEDE9]">
                  099 926 6392
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-light mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {["Instagram", "Facebook", "Twitter"].map((social) => (
                  <div
                    key={social}
                    className="w-8 h-8 border border-[#8A9A5B] flex items-center justify-center hover:bg-[#8A9A5B] transition-colors cursor-pointer"
                  >
                    <span className="text-xs">{social.charAt(0)}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#EFEDE9]">5.0 (1 review)</span>
              </div>
            </div>
          </div>

          <div className="border-t border-[#8A9A5B]/30 pt-6 text-center">
            <p className="text-[#EFEDE9] text-sm">
              © {new Date().getFullYear()} SOMA Restaurant & Café. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;