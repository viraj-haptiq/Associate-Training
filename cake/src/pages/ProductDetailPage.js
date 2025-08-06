import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById, fetchSimilarProducts } from "../api/cakeApi";
import { useDispatch } from "react-redux";
import SimilarProducts from "../components/SimilarProducts";
import { addToCart } from "../store/cartSlice";
import { useWishlist } from "../context/WishlistContext";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const productData = await fetchProductById(productId);
      setProduct(productData);
      if (productData) {
        const limit = productData.category === "icing" ? 3 : 4;

        const similarData = await fetchSimilarProducts({
          category: productData.category,
          currentProductId: productId,
          limit: limit,
        });
        setSimilarProducts(similarData);
      }
      setLoading(false);
    };
    getProduct();
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found!</div>;

  const handleWishlistClick = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">{product.price}</p>
          <p className="product-detail-description">
            A delicious and moist {product.name.toLowerCase()} cake, baked to
            perfection with the finest ingredients. Perfect for any occasion,
            from birthdays to anniversaries. Enjoy a slice of heaven!
          </p>
          <div className="product-detail-actions">
            <button
              className="add-to-cart-btn-large"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
            <button
              className={`wishlist-btn-large ${
                isInWishlist(product.id) ? "active" : ""
              }`}
              onClick={handleWishlistClick}
            >
              {isInWishlist(product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
      <SimilarProducts products={similarProducts} />
    </>
  );
};

export default ProductDetailPage;
