const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// Get all products, including associated Category and Tag data
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Products not found!" });
  }
});

// Get a single product, including associated Category and Tag data
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    !product
      ? res.status(404).json({ message: "Product not found!" })
      : res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Product not found!" });
  }
});

// Create a new product
router.post("/", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIds = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIds);
      }
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      res.status(400).json({ message: "Creation failed", error: err });
    });
});
// PLEASE NOTE CODE EDIT HAS BEEN SAVED FOR LEGACY CODING PURPOSES.

// Update a product
// router.put("/:id", (req, res) => {
//   Product.update(req.body, { where: { id: req.params.id } })
//     .then((product) => {
//       return ProductTag.findAll({ where: { product_id: req.params.id } });
//     })
//     .catch((err) => {
//       res.status(400).json({ message: "Error updating the product!", error: err });
//     })
//     .then((productTags) => {
//       const productTagIds = productTags.map(({ tag_id }) => tag_id);
    
//       const newProductTags = req.body.tagIds
//         ? req.body.tagIds
//             .filter((tag_id) => !productTagIds.includes(tag_id))
//             .map((tag_id) => {
//               return {
//                 product_id: req.params.id,
//                 tag_id,
//               };
//             })
//         : [];
    
//       const productTagsToRemove = req.body.tagIds
//         ? productTags
//             .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//             .map(({ id }) => id)
//         : productTags.map(({ id }) => id);
    
//       return Promise.all([
//         ProductTag.destroy({ where: { id: productTagsToRemove } }),
//         ProductTag.bulkCreate(newProductTags),
//       ]);
//     })
    
//     .catch((err) => {
//       console.log("Error object:", err);
//       res.status(400).json({ message: "Error finding product tags!", error: err });
//     })
//     .catch((err) => {
//       res.status(400).json({ message: "Error updating product tags!", error: err });
//     });
// });


// CODE EDIT END 
// CODE EDIT END 
// CODE EDIT END 

router.put("/:id", async (req, res) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });

    // Check if req.body.tags exists and has some length
    if (req.body.tags && req.body.tags.length > 0) {
      // Retrieve product tags and their IDs
      const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);

      // Filter new product tags and create new ones
      const newProductTags = req.body.tags
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      // Filter product tags to remove and delete them
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tags.includes(tag_id))
        .map(({ id }) => id);

      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    // Respond with updated product
    const product = await Product.findByPk(req.params.id, { include: [{ model: Tag }] });
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});


// CODE EDIT 
// CODE EDIT 
// CODE EDIT 

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    // Delete the product with the matching ID
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    // If the product is not found, send a 404 status with a custom message
    // Otherwise, return the deleted data
    !deleted
      ? res.status(404).json({ message: "id not found" })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Product not deleted!", error: err });
  }
});

module.exports = router;
