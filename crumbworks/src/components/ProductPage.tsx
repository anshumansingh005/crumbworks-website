import { Assets } from "@assets";
import { useEffect, useState } from "react";
import ContactSection from "./ContactSection";
import { Accordion } from "./FAQ";

interface ProductType {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  bgColor?: string;
}

const PRODUCTS: ProductType[] = [
  {
    id: 1,
    title: "Classic Bread Crumbs",
    image: Assets.pankobread,
    tags: ["EXTRA CRUNCH", "CLASSIC TASTE"],
    description:
      "This is for anyone who's ever made a great cutlet and still thought, 'Could've been crispier.' Our Panko is the flakier, crunchier kind of breadcrumb that fries up golden without soaking up all the oil.",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Panko Bread Crumbs",
    image: Assets.american,
    tags: ["EXTRA CRUNCH", "CLASSIC TASTE"],
    description:
      "This is for anyone who's ever made a great cutlet and still thought, “Could've been crispier Our Panko is the flakier, crunchier kind of breadcrumb that fries up golden without soaking up all the oil. It's lighter than the regular kind, so your food ends up crisp on the outside and still soft inside (a good thing).We didn't invent it,  it's been a Japanese pantry staple forever but we did make a version that's easy to use, clean, and actually holds up. No fillers, no weird taste, just bigger flakes that know their job and do it well.",
    bgColor: "bg-red-100",
  },
];

const faqs = [
  {
    question: "Ingredients",
    answer:
      "Refined Wheat Flour (Maida), Dried yeast, lodized Salt, Edible Vegetable Oil (Rice Bran Oil), Dextrose, Wheat gluten, Flour improver (INS 1100, 282), (Numbers referred above are as per international Numbering System. For Allergen see ingredient in  .",
  },
  {
    question: "Nutritions",
    answer:
      "While we specialize in traditional sourdough, we do offer a selection of gluten-free pastries baked in a separate area.",
  },
  {
    question: "How to use it?",
    answer:
      "Yes! You can order through our website and pick up your fresh bread and pastries at our bakery every morning.",
  },
];

export default function ProductDisplay() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [showBulkOrder, setShowBulkOrder] = useState(false);

  const handleOpen = (product: ProductType): void => {
    setSelectedProduct(product);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setSelectedProduct(null), 100);
  };

  useEffect(() => {
    if (selectedProduct || showBulkOrder) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [selectedProduct, showBulkOrder]);

  return (
    <div
      id="our-flavour"
      className="px-3.5 py-3.5 font-sans relative overflow-x-hidden"
    >
      {" "}
      <div className="max-w-5xl mx-auto mt-[160px] md:mt-[230px] relative">
        <div className="absolute w-full flex justify-center -top-[9%] left-0 md:left-[0] md:-top-[26%]">
          {/* md:left-[20%] md:-top-[24%] */}
          <picture className="items-center">
            <source
              media="(min-width: 769px)"
              srcSet={Assets.productDisplay}
              className=""
            />
            <img
              src={Assets.productDisplayMb}
              alt="Freshly baked artisanal bread"
              className=""
              loading="lazy"
            />
          </picture>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative z-0 justify-items-center">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-100 h-159.5 md:max-w-125 md:h-168.25 rounded-3xl p-0 bg-transparent flex flex-col items-center text-center relative"
            >
              <div className="w-full h-100 md:h-125 mb-6 relative border-[0.91px] border-[#0E0E0E33] rounded-[31.02px] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[233.58px] h-[344.52px] md:w-112.5 md:h-112 object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>

              <div className="w-full pb-6 flex flex-col items-center flex-1">
                <h3 className="text-[18px] md:text-[24px] font-bold text-black mb-3 font-serif">
                  {product.title}
                </h3>

                <div className="flex gap-2 justify-center mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow text-[12px] md:text-[13px] font-medium leading-[100%] text-center px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full mt-auto items-center">
                  <button
                    onClick={() => setShowBulkOrder(true)}
                    className="w-full md:flex-1 border border-[#164BC6] text-[#164BC6] h-16 md:h-auto md:py-3 max-w-100 flex items-center justify-center rounded-full font-bold text-sm uppercase tracking-wide hover:bg-blue-50 transition-colors"
                  >
                    Bulk Order
                  </button>
                  <button
                    onClick={() => handleOpen(product)}
                    className="w-full md:flex-1 bg-[#004aad] text-white h-16 md:h-auto md:py-3 max-w-100 flex items-center justify-center rounded-full font-bold text-sm uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-blue-900/20 shadow-lg"
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
          <div
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
          />

          <div
            className={` lg:py-[30px] lg:px-[40px] p-[14px]
              bg-[#fbfceb] w-full max-w-lg lg:max-w-[1193px] lg:max-h-[681px] h-[85vh] sm:h-auto sm:max-h-[90vh]
              rounded-t-[32px] sm:rounded-[40px] p-0  flex flex-col lg:flex-row relative gap-[24px] [md:gap-31px] overflow-y-auto
              transition-transform duration-300 transform
              ${
                isAnimating
                  ? "translate-y-0 scale-100"
                  : "translate-y-full sm:translate-y-10 sm:scale-95"
              }
            `}
          >
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 bg-black/5 rounded-full hover:bg-black/10 transition z-20"
            >
              X
            </button>

            <div className="w-full w-[100%] h-[400px] lg:w-1/2 lg:max-w-[511px] lg:h-[511px] p-4 pb-12 lg:p-0 relative flex items-center justify-center shrink-0 bg-yellow rounded-2xl md:rounded-[22px] mx-auto lg:mx-0">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full max-w-[250px] h-[400px] lg:max-w-[420px] lg:w-[400px] lg:h-[472px] drop-shadow-2xl object-contain mt-4 lg:mt-0"
                loading="lazy"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  {selectedProduct.title}
                </h2>

                <div className="flex gap-2 mb-6">
                  {selectedProduct.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#fbdb04] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
                  {selectedProduct.description}
                </p>

                <p className="text-gray-700 leading-relaxed mb-8 text-sm sm:text-base">
                  We didn't invent it, it's been a Japanese pantry staple
                  forever but we did make a version that's easy to use, clean,
                  and actually holds up.
                </p>

                <div className="flex gap-4 overflow-x-auto pb-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-20 h-24 bg-yellow-100 rounded-lg shrink-0 flex items-center justify-center"
                    >
                      <img
                        src={selectedProduct.image}
                        className="w-12 opacity-80"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-4 mb-8">
                  {faqs.map((faq, index) => (
                    <Accordion key={index} title={faq.question}>
                      <p className="text-sm md:text-base opacity-80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </Accordion>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showBulkOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowBulkOrder(false)}
          />
          <div className="relative w-full max-w-2xl bg-bg rounded-[32px] overflow-hidden shadow-2xl transform transition-all">
            <button
              onClick={() => setShowBulkOrder(false)}
              className="absolute top-6 right-6 p-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition z-20"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L13 13M1 13L13 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ContactSection />
          </div>
        </div>
      )}
    </div>
  );
}
