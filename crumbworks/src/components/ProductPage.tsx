import { useEffect, useState } from "react";
import american from "../assets/American-bread.webp";
import pankobread from "../assets/Panko-bread.webp";

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
    image: pankobread,
    tags: ["EXTRA CRUNCH", "CLASSIC TASTE"],
    description:
      "This is for anyone who's ever made a great cutlet and still thought, 'Could've been crispier.' Our Panko is the flakier, crunchier kind of breadcrumb that fries up golden without soaking up all the oil.",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Panko Bread Crumbs",
    image: american,
    tags: ["EXTRA CRUNCH", "CLASSIC TASTE"],
    description:
      "This is for anyone who's ever made a great cutlet and still thought, “Could've been crispier Our Panko is the flakier, crunchier kind of breadcrumb that fries up golden without soaking up all the oil. It's lighter than the regular kind, so your food ends up crisp on the outside and still soft inside (a good thing).We didn't invent it,  it's been a Japanese pantry staple forever but we did make a version that's easy to use, clean, and actually holds up. No fillers, no weird taste, just bigger flakes that know their job and do it well.",
    bgColor: "bg-red-100",
  },
];

const Sticker = () => (
  <svg
    viewBox="0 0 600 250"
    className="w-full max-w-75 lg:max-w-100 mx-auto absolute -top-16 left-0 right-0 z-10 pointer-events-none"
  >
    <path id="curveTop" d="M 50,200 Q 300,20 550,200" fill="transparent" />
    <path id="curveBottom" d="M 50,255 Q 300,75 550,255" fill="transparent" />
    <g transform="rotate(-12, 300, 125)">
      <g transform="translate(3, 3)">
        <text
          fontFamily="Impact, sans-serif"
          fontSize="48"
          fill="#cccccc"
          letterSpacing="1"
        >
          <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
            HIGHLY ADDICTIVE.
          </textPath>
        </text>
        <text
          fontFamily="Impact, sans-serif"
          fontSize="48"
          fill="#cccccc"
          letterSpacing="1"
        >
          <textPath href="#curveBottom" startOffset="55%" textAnchor="middle">
            ADD BOTH TO CART!
          </textPath>
        </text>
      </g>
      <g>
        <text
          fontFamily="Impact, sans-serif"
          fontSize="48"
          fill="#164BC6"
          letterSpacing="1"
        >
          <textPath href="#curveTop" startOffset="50%" textAnchor="middle">
            HIGHLY ADDICTIVE.
          </textPath>
        </text>
        <text
          fontFamily="Impact, sans-serif"
          fontSize="48"
          fill="#164BC6"
          letterSpacing="1"
        >
          <textPath href="#curveBottom" startOffset="55%" textAnchor="middle">
            ADD BOTH TO CART!
          </textPath>
        </text>
      </g>
    </g>
  </svg>
);

export default function ProductDisplay() {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpen = (product: any) => {
    setSelectedProduct(product);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setSelectedProduct(null), 100);
  };

  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProduct]);

  return (
    <div className="min-h-screen  px-3.5 py-3.5 font-sans relative overflow-x-hidden">
      <div className="max-w-5xl mx-auto mt-20 relative">
        <Sticker />

        <div className="grid lg:grid-cols-2 gap-8 relative z-0 justify-items-center">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="w-full max-w-100 h-159.5 lg:max-w-125 lg:h-168.25 rounded-3xl p-0 bg-transparent flex flex-col items-center text-center relative hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-full h-100 lg:h-125 mb-6 relative border-[0.91px] border-[#0E0E0E33] rounded-[31.02px] flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[233.58px] h-[344.52px] lg:w-112.5 lg:h-112 object-contain drop-shadow-xl"
                />
              </div>

              <div className="w-full pb-6 flex flex-col items-center flex-1">
                <h3 className="text-[18px] lg:text-[24px] font-bold text-black mb-3 font-serif">
                  {product.title}
                </h3>

                <div className="flex gap-2 justify-center mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-yellow text-[12px] lg:text-[13px] font-medium leading-[100%] text-center px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-4 w-full mt-auto px-6 items-center">
                  <button className="w-full lg:flex-1 border border-[#164BC6] text-[#164BC6] h-16 lg:h-auto lg:py-3 max-w-100 flex items-center justify-center rounded-full font-bold text-sm uppercase tracking-wide hover:bg-blue-50 transition-colors">
                    Bulk Order
                  </button>
                  <button
                    onClick={() => handleOpen(product)}
                    className="w-full lg:flex-1 bg-[#004aad] text-white h-16 lg:h-auto lg:py-3 max-w-100 flex items-center justify-center rounded-full font-bold text-sm uppercase tracking-wide hover:bg-blue-700 transition-colors shadow-blue-900/20 shadow-lg"
                  >
                    Order Online
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
            className={`
              bg-[#fbfceb] w-full max-w-lg h-[85vh] sm:h-auto sm:max-h-[90vh]
              rounded-t-[40px] sm:rounded-[40px] p-0 overflow-hidden flex flex-col relative
              transition-transform duration-300 transform
              ${
                isAnimating
                  ? "translate-y-0 scale-100"
                  : "translate-y-full sm:translate-y-10 sm:scale-95"
              }
            `}
          >
            <div className="overflow-y-auto flex-1">
              <div className="bg-[#fbdb04] w-full p-8 pb-12 rounded-b-[40px] relative flex justify-center">
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 p-2 bg-white/20 rounded-full hover:bg-white/40 transition"
                >
                  X
                </button>

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-48 h-auto drop-shadow-2xl object-contain mt-4"
                />
              </div>

              <div className="p-8">
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
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
