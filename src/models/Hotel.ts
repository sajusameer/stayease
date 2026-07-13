import { Schema, model, models } from "mongoose";

const hotelSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Luxury", "Resort", "Business", "Budget", "Boutique"],
    },

    pricePerNight: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },

    shortDescription: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    amenities: [
      {
        type: String,
      },
    ],

    images: [
      {
        type: String,
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },

    // createdBy: {
    //   type: String,
    //   required: true,
    // },
    createdBy: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  }
);

const Hotel = models.Hotel || model("Hotel", hotelSchema);

export default Hotel;