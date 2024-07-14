import Button from "../components/Button";
import Navbar from "../components/Navbar";
import NumberField from "../components/NumberField";
import data from "../assets/data.json";
import { useParams } from "react-router-dom";
import useScreenType from "../hooks/useScreenType";

import BottomSecttion from "../components/BottomSecttion";
import Footer from "../components/Footer";
import MenuMobile from "../components/MenuMobile";

function ProductDetail() {
  const { slug } = useParams();
  const product = data.find((item) => item.slug === slug);
  const screenType = useScreenType();
  const currentImage =
    product?.image?.[screenType] ?? product?.categoryImage?.desktop;

  return (
    <>
      <Navbar />

      <div className="flex w-full flex-col gap-7 bg-gray-100 px-4 pt-4 sm:px-8 md:gap-32 md:px-40 md:pt-12">
        <button className="w-fit text-[15px] text-opacity-50">Go back</button>
        <div className="flex flex-col gap-7 sm:flex-row md:justify-between md:gap-36">
          <img
            className="rounded-xl sm:h-[480px] sm:w-[281px] md:h-[560px] md:w-[540px]"
            src={currentImage}
          />
          <div className="flex flex-initial flex-col gap-7 sm:mt-20">
            <span className="text-[14px] tracking-[10px] text-orange-primary">
              NEW PRODUCT
            </span>
            <span className="text-[28px] font-bold">
              {product.name.toLocaleUpperCase()}
            </span>
            <p className="leading-[25px] xl:w-1/2 xl:text-left">
              {product.description}
            </p>
            <span className="text-lg font-bold">${product.price}</span>
            <div className="flex justify-between sm:justify-start sm:gap-7">
              <NumberField />
              <Button
                className={
                  "h-[48px] w-[160px] bg-orange-primary px-7 py-4 text-[13px] font-bold text-gray-0 hover:bg-orange-secondary"
                }
                title={"ADD TO CART"}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-44">
          <div className="flex flex-col gap-6 md:w-1/2">
            <h3 className="text-2xl font-bold">FEATURES</h3>
            <p className="text-[15px] leading-6">
              {product.features
                .split(". ")
                .slice(0, Math.ceil(product.features.split(". ").length / 2))
                .join(". ") + "."}
            </p>
            <p className="text-[15px] leading-6">
              {product.features
                .split(". ")
                .slice(Math.ceil(product.features.split(". ").length / 2))
                .join(". ")}
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-56 md:flex-col md:gap-6">
            <h3 className="text-2xl font-bold">IN THE BOX</h3>
            <ul className="flex flex-col gap-3">
              {product.includes.map((item) => (
                <li key={item.item} className="flex gap-4">
                  <span className="font-bold text-orange-primary">
                    {item.quantity}x
                  </span>
                  <p className="text-opacity-50">{item.item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {["first", "second", "third"].map((position, index) => (
            <img
              key={position}
              alt={`${product.name} - ${position}`}
              src={
                product.gallery[position][screenType] ??
                product.gallery[position].desktop
              }
              className={`gallery-image rounded-xl md:w-full ${index === 1 ? "sm:row-start-2" : ""}${index === 2 ? "sm:row-span-2" : ""}`}
            />
          ))}
        </div>
        <MenuMobile />
        <BottomSecttion />
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
