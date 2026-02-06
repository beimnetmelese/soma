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

  const [activeTab, setActiveTab] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

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
      description:
        "Seasonal greens with imported Italian olive oil and balsamic",
      price: "ETB 240",
      category: "Starters",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Handmade Tagliatelle",
      description: "Fresh pasta with wild mushrooms and truffle oil",
      price: "ETB 380",
      category: "Pasta",
      image:
        "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Italian Café Selection",
      description: "Premium coffee, artisan pastries, and sweet treats",
      price: "ETB 120-280",
      category: "Café",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Osso Buco",
      description: "Milanese-style braised veal shanks with saffron risotto",
      price: "ETB 520",
      category: "Mains",
      image:
        "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Wood-Fired Pizza",
      description:
        "Thin crust pizza with San Marzano tomatoes and fresh mozzarella",
      price: "ETB 320",
      category: "Pizza",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Tiramisu Classico",
      description:
        "Traditional Italian dessert with espresso-soaked ladyfingers",
      price: "ETB 180",
      category: "Desserts",
      image:
        "https://images.unsplash.com/photo-1571877227200-0b38eea1f4fa?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=60",
      title: "Restaurant Interior",
      tag: "Ambience",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=60",
      title: "Handmade Pasta",
      tag: "Signature",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=600&auto=format&fit=crop&q=60",
      title: "Dining Area",
      tag: "Experience",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=60",
      title: "Café Corner",
      tag: "Café",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&auto=format&fit=crop&q=60",
      title: "Gourmet Dining",
      tag: "Cuisine",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1571266040582-91e3f0e04e1f?w=600&auto=format&fit=crop&q=60",
      title: "Wine Selection",
      tag: "Curated",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Alex Morgan",
      role: "Food Critic",
      rating: 5,
      date: "2 weeks ago",
      text: "An extraordinary culinary experience. The handmade pasta rivals what I've tasted in Florence. The attention to detail is remarkable.",
      avatar: "AM",
    },
    {
      id: 2,
      name: "Sophia Rossi",
      role: "Regular Guest",
      rating: 5,
      date: "1 month ago",
      text: "The perfect blend of authentic Italian flavors and modern presentation. The tiramisu is the best I've had outside of Italy.",
      avatar: "SR",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "First-time Visitor",
      rating: 5,
      date: "3 days ago",
      text: "Impeccable service and atmosphere. The wood-fired pizza had that perfect crisp texture I've been searching for in Addis.",
      avatar: "JW",
    },
  ];

  const features = [
    {
      icon: "🍝",
      title: "Artisan Pasta",
      description: "Handmade daily using traditional Italian techniques",
      color: "from-[#C41E3A] to-[#FF6B6B]",
    },
    {
      icon: "🔥",
      title: "Wood-Fired",
      description: "Authentic wood oven for perfect crust and flavor",
      color: "from-[#8B0000] to-[#C41E3A]",
    },
    {
      icon: "🌿",
      title: "Fresh Ingredients",
      description: "Locally sourced produce, imported Italian specialties",
      color: "from-[#2E8B57] to-[#3CB371]",
    },
    {
      icon: "🍷",
      title: "Curated Selection",
      description: "Expertly chosen wines to complement every dish",
      color: "from-[#800020] to-[#A52A2A]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Enhanced Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="bg-white/90 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-gray-100/50 shadow-sm"
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C41E3A] to-[#8B0000] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-serif font-bold text-xl">
                    S
                  </span>
                </div>
                <motion.div
                  className="absolute -inset-2 border-2 border-[#C41E3A]/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-[#C41E3A] to-[#8B0000] bg-clip-text text-transparent">
                  SOMA
                </h1>
                <p className="text-xs text-gray-600 tracking-widest">
                  RESTAURANT & CAFÉ
                </p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map(
                (item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="relative text-gray-700 hover:text-[#C41E3A] font-medium text-sm tracking-wider group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <motion.span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] group-hover:w-full transition-all duration-300"
                      layoutId={`nav-${item}`}
                    />
                  </motion.a>
                ),
              )}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-[#FF4D6D] to-[#FFB347] text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Reserve Table
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden text-gray-700"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Keep as is */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80')",
          }}
        ></div>

        <div className="container mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-8 py-3 rounded-full mb-10 border border-white/20 shadow-lg"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <span className="text-white font-medium">5.0 • 127 Reviews</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-6xl md:text-8xl lg:text-9xl font-serif font-light text-white mb-6 tracking-tighter leading-none"
            >
              <span className="block">SOMA</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-6 tracking-[0.3em]">
                RESTAURANT & CAFÉ
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl md:text-2xl text-white/90 mb-14 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Where Italian tradition meets contemporary elegance in the heart
              of Bole Bulbula
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 bg-white text-gray-900 font-semibold text-lg tracking-wide overflow-hidden rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <span className="relative z-10">Explore Our Menu</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF4D6D] to-[#FFB347] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg tracking-wide overflow-hidden rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <span className="relative z-10">Book a Table</span>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          >
            <div className="w-8 h-14 border-2 border-white/40 flex justify-center rounded-3xl backdrop-blur-sm">
              <motion.div
                className="w-1.5 h-4 bg-white/80 mt-3 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium About Section */}
      <section
        id="about"
        className="py-28 bg-gradient-to-b from-white to-gray-50/50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 bg-gradient-to-r from-[#C41E3A]/10 to-[#8B0000]/10 text-[#C41E3A] text-sm font-medium rounded-full mb-6"
              >
                OUR STORY
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-8"
              >
                La Nostra Passione
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="w-32 h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] mx-auto mb-12"
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=800&auto=format&fit=crop&q=60"
                    alt="Handmade Pasta"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <motion.div
                    className="absolute top-8 left-8"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <span className="px-6 py-2 bg-white/90 backdrop-blur-sm text-[#C41E3A] text-sm font-bold tracking-widest rounded-full">
                      SINCE 2023
                    </span>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#C41E3A] to-[#8B0000] p-8 rounded-2xl shadow-2xl"
                >
                  <p className="text-white text-3xl font-serif">127+</p>
                  <p className="text-white/80 text-sm mt-2">5-Star Reviews</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.h3
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-4xl font-serif font-light text-gray-900"
                >
                  Where Tradition Meets{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C41E3A] to-[#8B0000] font-semibold">
                    Innovation
                  </span>
                </motion.h3>

                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  At SOMA, we believe that great food begins with great stories.
                  Our journey started with a simple passion for authentic
                  Italian cuisine, reimagined through a contemporary lens.
                </motion.p>

                <motion.p
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-lg leading-relaxed"
                >
                  Every dish tells a story of craftsmanship, from our daily
                  handmade pasta to our carefully curated wine selection. We
                  create not just meals, but memorable experiences.
                </motion.p>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-6 pt-6"
                >
                  {features.map((feature) => (
                    <motion.div
                      key={feature.title}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-md`}
                      >
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Menu Section */}
      <section
        id="menu"
        className="py-28 bg-gradient-to-b from-gray-50/50 to-white"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-[#C41E3A]/10 to-[#8B0000]/10 text-[#C41E3A] text-sm font-medium rounded-full mb-6"
            >
              CULINARY JOURNEY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-8"
            >
              Artisanal Creations
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] mx-auto"
            />
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {[
              "all",
              "starters",
              "pasta",
              "mains",
              "pizza",
              "desserts",
              "café",
            ].map((category) => (
              <motion.button
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === category
                    ? "bg-gradient-to-r from-[#C41E3A] to-[#8B0000] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#C41E3A]/50 hover:text-[#C41E3A]"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    animate={
                      hoveredItem === item.id ? { scale: 1.1 } : { scale: 1 }
                    }
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <motion.div
                    className="absolute top-6 left-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="px-4 py-1.5 bg-white/95 backdrop-blur-sm text-[#C41E3A] text-xs font-bold tracking-wider rounded-full shadow">
                      {item.category.toUpperCase()}
                    </span>
                  </motion.div>
                  <motion.div
                    className="absolute top-6 right-6"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <span className="px-4 py-1.5 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] text-white text-sm font-bold rounded-full shadow-lg">
                      {item.price}
                    </span>
                  </motion.div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-serif font-semibold text-gray-900 group-hover:text-[#C41E3A] transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Add to Order
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              View Complete Menu
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Premium Reviews Section */}
      <section
        id="reviews"
        className="py-28 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#C41E3A]/10 to-[#8B0000]/10 px-8 py-3 rounded-full mb-6"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-2xl font-serif font-semibold text-gray-900">
                5.0
              </span>
              <span className="text-[#C41E3A] font-semibold">
                (127 reviews)
              </span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-8"
            >
              Guest Experiences
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 text-xl max-w-3xl mx-auto mb-12"
            >
              Discover why our guests keep coming back for exceptional moments
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] mx-auto"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#8B0000] rounded-2xl flex items-center justify-center text-white text-xl font-bold mr-4 shadow-lg">
                      {review.avatar}
                    </div>
                    <motion.div
                      className="absolute -inset-2 border-2 border-[#C41E3A]/20 rounded-2xl"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {review.name}
                    </h4>
                    <div className="flex items-center mt-1">
                      <div className="flex mr-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[#C41E3A] text-sm font-medium">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">{review.role}</p>
                  </div>
                </div>

                <p className="text-gray-700 italic leading-relaxed text-lg">
                  "{review.text}"
                </p>

                <motion.div
                  className="mt-8 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      Verified Visit
                    </span>
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C41E3A]/10 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C41E3A]/10 transition-colors"
                      >
                        <svg
                          className="w-4 h-4 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-white border-2 border-gray-200 text-gray-800 font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:border-[#C41E3A] hover:text-[#C41E3A] transition-all duration-300"
            >
              Read More Reviews
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Premium Gallery Section */}
      <section
        id="gallery"
        className="py-28 bg-gradient-to-b from-gray-50/50 to-white"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-[#C41E3A]/10 to-[#8B0000]/10 text-[#C41E3A] text-sm font-medium rounded-full mb-6"
            >
              VISUAL STORY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-8"
            >
              Our Atmosphere
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-600 text-xl max-w-3xl mx-auto mb-12"
            >
              A glimpse into the elegance and warmth that defines SOMA
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg bg-white ${
                  index === 1 || index === 4
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs font-medium rounded-full mb-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/80"></span>
                    {item.tag}
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed">
                    A refined moment from our signature experience.
                  </p>
                </div>
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl"
                  initial={false}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] text-white font-semibold text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              View Full Gallery
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section
        id="contact"
        className="py-28 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-gradient-to-r from-[#C41E3A]/10 to-[#8B0000]/10 text-[#C41E3A] text-sm font-medium rounded-full mb-6"
            >
              GET IN TOUCH
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-serif font-light text-gray-900 mb-8"
            >
              Visit Us Today
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: true }}
              className="w-32 h-1 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] mx-auto mb-12"
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-serif font-light text-gray-900 mb-10">
                  Find Our Location
                </h3>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#C41E3A]/10 to-[#8B0000]/10 rounded-2xl flex items-center justify-center mr-5">
                        <span className="text-2xl text-[#C41E3A]">📍</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        Address
                      </h4>
                      <p className="text-gray-700 text-lg">
                        Bole Bulbula, Addis Ababa 1000
                      </p>
                      <p className="text-[#C41E3A] font-medium mt-2">
                        Plus Code: XQ2P+F8, Addis Ababa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#C41E3A]/10 to-[#8B0000]/10 rounded-2xl flex items-center justify-center mr-5">
                        <span className="text-2xl text-[#C41E3A]">⏰</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        Hours
                      </h4>
                      <p className="text-gray-700 text-lg">
                        Monday - Sunday: 8:00 AM - 11:00 PM
                      </p>
                      <p className="text-gray-500 mt-2">
                        Last seating at 10:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#C41E3A]/10 to-[#8B0000]/10 rounded-2xl flex items-center justify-center mr-5">
                        <span className="text-2xl text-[#C41E3A]">📞</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">
                        Contact
                      </h4>
                      <p className="text-3xl font-bold text-gray-900">
                        099 926 6392
                      </p>
                      <p className="text-gray-500 mt-2">
                        reservations@soma-restaurant.com
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get Directions
                </motion.button>

                {/* Map */}
                <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[16/9] relative">
                    <iframe
                      title="SOMA Restaurant & Cafe Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2268261753065!2d38.78091534559445!3d8.951234868247179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8300370de0db%3A0x61f8a6357e037d0b!2sSOMA%20Restaurant%20%26%20Cafe!5e0!3m2!1sen!2set!4v1770384149167!5m2!1sen!2set"
                      className="absolute inset-0 h-full w-full border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-serif font-light text-gray-900 mb-4">
                  Make a Reservation
                </h3>
                <p className="text-gray-600 text-lg mb-10">
                  Book your table for an unforgettable dining experience
                </p>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-gray-800 font-semibold text-lg mb-3">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#C41E3A] focus:ring-4 focus:ring-[#C41E3A]/20 transition-all duration-300 text-lg"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 font-semibold text-lg mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#C41E3A] focus:ring-4 focus:ring-[#C41E3A]/20 transition-all duration-300 text-lg"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-800 font-semibold text-lg mb-3">
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-[#C41E3A] focus:ring-4 focus:ring-[#C41E3A]/20 transition-all duration-300 text-lg resize-none"
                      placeholder="Any special occasions or dietary requirements?"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-5 bg-gradient-to-r from-[#C41E3A] to-[#8B0000] text-white font-semibold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Reserve Table
                  </motion.button>
                </form>

                <div className="mt-12 pt-10 border-t border-gray-200">
                  <p className="text-center text-gray-600 text-lg">
                    For immediate assistance, call us at{" "}
                    <span className="text-[#C41E3A] font-bold">
                      099 926 6392
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#C41E3A] to-[#8B0000] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-serif font-bold text-2xl">
                      S
                    </span>
                  </div>
                  <motion.div
                    className="absolute -inset-2 border-2 border-[#C41E3A]/20 rounded-2xl"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold">SOMA</h2>
                  <p className="text-sm text-gray-400 tracking-widest">
                    RESTAURANT & CAFÉ
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                Where Italian tradition meets contemporary elegance, creating
                unforgettable dining experiences in the heart of Bole Bulbula.
              </p>
              <div className="flex items-center">
                <div className="flex mr-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-300 font-medium">
                  5.0 • 127 reviews
                </span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-8">Navigation</h3>
              <ul className="space-y-4">
                {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase()}`}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-8">Contact Info</h3>
              <div className="space-y-4 text-sm">
                <p className="text-gray-400">Bole Bulbula, Addis Ababa 1000</p>
                <p className="text-gray-400">XQ2P+F8, Addis Ababa</p>
                <p className="text-gray-400">099 926 6392</p>
                <p className="text-gray-400">hello@soma-restaurant.com</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-semibold mb-8">Connect With Us</h3>
              <div className="flex space-x-4 mb-8">
                {["Instagram", "Facebook", "Twitter", "Tripadvisor"].map(
                  (social) => (
                    <motion.div
                      key={social}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 border border-gray-700 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-[#C41E3A] hover:to-[#8B0000] hover:border-transparent transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-sm font-medium">
                        {social.charAt(0)}
                      </span>
                    </motion.div>
                  ),
                )}
              </div>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} SOMA Restaurant & Café. All rights
                reserved.
              </p>
              <div className="flex space-x-8 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Careers
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Reservation Button */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gradient-to-br from-[#C41E3A] to-[#8B0000] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300"
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
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default App;
