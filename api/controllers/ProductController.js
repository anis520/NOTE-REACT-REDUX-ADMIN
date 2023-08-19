import Product from "../models/product.js";
import { uploadcloud } from "../utils/cloudnary.js";
import { getDataUri } from "../utils/datauri.js";
import { createSlug } from "../utils/slugCreate.js";

import { v2 as cloudinary } from "cloudinary";

export const createProduct = async (req, res, next) => {
  let gal = [];

  const { name, regular_price, stock, photo, catagorys, tags, brand } =
    req.body;
  let slug = createSlug(name);

  if (req.files.gallary) {
    for (let i = 0; i < req.files.gallary.length; i++) {
      gal.push(req.files.gallary[i].filename);
    }
  }

  try {
    console.log(req.files);
    let cat = catagorys.split(",");
    let tag = [];

    !tags == "" ? (tag = tags.split(",")) : (tag = []);

    const product = await Product.create({
      name,
      slug,
      stock: Number(stock),
      catagorys: cat,
      tags: tag,
      brand,
      photo: req.files.photo[0].filename,
      gallary: gal,
      regular_price,
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
};
export const getallProduct = async (req, res, next) => {
  try {
    const product = await Product.find();

    res.json(product);
  } catch (error) {
    next(error);
  }
};
export const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Product.findByIdAndDelete(id);

    product ? res.json(product) : res.json({ message: "product not found" });
  } catch (error) {
    next(error);
  }
};
