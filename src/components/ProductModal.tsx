import React from "react";
import { X } from "lucide-react";

interface ProductVariant {
  id: string;
  size: string;
  packing: string;
  rate?: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  variants: ProductVariant[];
}

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[75vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="responsive-text-lg md:responsive-text-2xl font-bold text-plumbing-dark pr-4">
            {product.name}
          </h2>
          <button
            onClick={onClose}
            className="p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-gray" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Product Image */}
            <div className="flex justify-center  rounded-lg shadow-md">
              <img
                src={product.image}
                alt={product.name}
                className="h-full sm:h-56 md:h-64 scale-90"
              />
            </div>

            {/* Product Description */}
            <div>
              <h3 className="responsive-text-lg md:responsive-text-xl font-semibold text-plumbing-dark mb-3 sm:mb-4">
                Product Description
              </h3>
              <p className="responsive-text-sm md:responsive-text-base text-plumbing-gray leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Variants Table */}
          <div className="mt-6 sm:mt-8">
            <h3 className="responsive-text-lg md:responsive-text-xl font-semibold text-plumbing-dark mb-3 sm:mb-4">
              Available Variants
            </h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle">
                <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-plumbing-primary text-white">
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-center font-semibold responsive-text-xs md:responsive-text-sm">
                        Size
                      </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 text-center font-semibold responsive-text-xs md:responsive-text-sm">
                        Packing
                      </th>
                      <th className="px-3 sm:px-6 py-2 sm:py-3 font-semibold responsive-text-xs md:responsive-text-sm text-center">
                        Rate / Unit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.variants.map((variant, index) => (
                      <tr
                        key={variant.id}
                        className={`border-b hover:bg-gray-50 transition-colors ${
                          index % 2 === 0 ? "bg-gray-25" : "bg-white"
                        }`}
                      >
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-plumbing-dark font-medium responsive-text-xs md:responsive-text-sm text-center">
                          {variant.size}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-plumbing-dark font-medium responsive-text-xs md:responsive-text-sm text-center">
                          {variant.packing}
                        </td>
                        <td className="px-3 sm:px-6 py-3 sm:py-4 text-plumbing-dark font-medium responsive-text-xs md:responsive-text-sm text-center">
                          {variant.rate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-50 rounded-lg">
            <h3 className="responsive-text-base md:responsive-text-lg font-semibold text-plumbing-dark mb-2">
              Interested in this product?
            </h3>
            <p className="responsive-text-sm md:responsive-text-base text-plumbing-gray mb-4 leading-relaxed">
              Contact our sales team for bulk pricing, custom specifications, or
              technical support.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="tel:+911234567890"
                className="bg-plumbing-primary text-white px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-plumbing-secondary transition-colors text-center responsive-text-sm md:responsive-text-base"
              >
                Call Sales Team
              </a>
              <a
                href="mailto:sales@shubhamplastic.com"
                className="border-2 border-plumbing-primary text-plumbing-primary px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-plumbing-primary hover:text-white transition-colors text-center responsive-text-sm md:responsive-text-base"
              >
                Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
