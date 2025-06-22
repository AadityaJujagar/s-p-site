import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductModal from "./ProductModal";
import { categoryData, Product } from "../data";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products = category ? categoryData[category] || [] : [];

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      upvc: "U-PVC Products",
      cpvc: "C-PVC Products",
      pvc: "PVC Products",
      swr: "SWR Products",
      ecodrain: "EcoDrain Products",
    };
    return titles[category || ""] || "Products";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 md:py-8">
      <div className="responsive-container">
        <div className="mb-6 sm:mb-8">
          <h1 className="responsive-text-3xl md:responsive-text-4xl font-bold text-plumbing-dark mb-3 sm:mb-4">
            {getCategoryTitle(category || "")}
          </h1>
          <p className="responsive-text-lg md:responsive-text-xl text-plumbing-gray">
            Premium quality {category} products for professional and residential
            use
          </p>
        </div>

        {products.length === 0 ? (
          <p className="text-gray-500">No products found for this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-2 rounded-lg shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer group"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="sm:h-44 md:h-48 h-full p-3 mx-auto group-hover:scale-95 transition-transform duration-200"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="responsive-text-base md:responsive-text-lg font-semibold text-plumbing-dark mb-2 group-hover:text-plumbing-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="responsive-text-xs md:responsive-text-sm font-medium text-plumbing-primary">
                      {product.variants.length} variant
                      {product.variants.length !== 1 ? "s" : ""}
                    </span>
                    <span className="responsive-text-xs text-gray-500">
                      Click to view
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
