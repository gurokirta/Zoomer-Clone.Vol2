import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStore } from "../../zustand/store";

import { Ajax } from "../../utils/Ajax";
import { useParams } from "react-router-dom";
import "./productDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState("");
  const handleImageClick = (image: React.SetStateAction<string>) => {
    setSelectedImage(image);
  };
  const fetchSingleProduct = async () => {
    const { data: productItem } = await Ajax.get(`/product/${id}`);
    setProduct(productItem);
    setSelectedImage(productItem.images[0]);
  };
  const setCartItems = useStore(state => state.setCartItems); // Get setCartItems from store

  const handleAddToCart = () => {
    if (product) {
      setCartItems(product); // Add the product to the cart
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [id]);
  return (
    <Box className="product-detail-container">
      <Box className="product-image-container">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="selected-image"
        />
        <Box className="thumbnail-container">
          {product?.images.slice(0, 4).map(image => (
            <img
              src={image}
              alt="Thumbnail"
              className="thumbnail"
              onClick={() => handleImageClick(image)}
              key={product.image}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          className="add-to-cart-button"
          onClick={handleAddToCart} // Handle click event
        >
          Add to Cart
        </Button>
      </Box>
      <Box className="product-info-container">
        <Typography variant="h4" className="product-title">
          {product?.title}
        </Typography>
        <Typography variant="h6" className="product-title">
          ფასი:
          {product?.price} ლ
        </Typography>

        <Typography className="product-description">
          {product?.description}
        </Typography>
      </Box>
    </Box>
  );
};
export default ProductDetail;
