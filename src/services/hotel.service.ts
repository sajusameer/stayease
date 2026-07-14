// import axios from "axios";

// export interface HotelPayload {
//   title: string;
//   location: string;
//   category: string;
//   pricePerNight: number;
//   rating: number;
//   shortDescription: string;
//   description: string;
//   images: string[];
//   amenities: string[];
//   featured: boolean;
// }

// // Create Hotel
// export async function createHotel(data: HotelPayload) {
//   const response = await axios.post("/api/hotels", data);
//   return response.data;
// }
// export async function getFeaturedHotels() {
//   const response = await axios.get("/api/hotels?featured=true");
//   return response.data;
// }
// // Get All Hotels
// export async function getHotels() {
//   const response = await axios.get("/api/hotels");
//   return response.data;
// }

// // Get Single Hotel
// export async function getHotel(id: string) {
//   const response = await axios.get(`/api/hotels/${id}`);
//   return response.data;
// }

// // Delete Hotel
// export async function deleteHotel(id: string) {
//   const response = await axios.delete(`/api/hotels/${id}`);
//   return response.data;
// }  
// import axios from "axios";

// export interface HotelPayload {
//   title: string;
//   location: string;
//   category: string;
//   pricePerNight: number;
//   rating: number;
//   shortDescription: string;
//   description: string;
//   images: string[];
//   amenities: string[];
//   featured: boolean;
// }

// export interface GetHotelsParams {
//   search?: string;
//   category?: string;
//   location?: string;
//   featured?: boolean;
//   sort?: string;
//   page?: number;
//   limit?: number;
// }

// // Get Hotel By ID (Admin Edit)
// export async function getHotelById(id: string) {
//   const response = await axios.get(`/api/hotels/${id}`);
//   return response.data;
// }

// // Get Hotel By Slug (Hotel Details)
// export async function getHotelBySlug(slug: string) {
//   const response = await axios.get(`/api/hotels/by-slug/${slug}`);
//   return response.data;
// }

// // Create Hotel
// export async function createHotel(data: HotelPayload) {
//   const response = await axios.post("/api/hotels", data);
//   return response.data;
// }

// // Get Featured Hotels
// export async function getFeaturedHotels() {
//   const response = await axios.get("/api/hotels", {
//     params: {
//       featured: true,
//     },
//   });

//   return response.data;
// }

// // Get Hotels
// export async function getHotels(params?: GetHotelsParams) {
//   const response = await axios.get("/api/hotels", {
//     params,
//   });

//   return response.data;
// }

// // Get Single Hotel
// // export async function getHotel(id: string) {
// //   const response = await axios.get(`/api/hotels/${id}`);
// //   return response.data;
// // }
// export async function getHotel(slug: string) {
//   const response = await axios.get(`/api/hotels/by-slug/${slug}`);
//   return response.data;
// }

// // Delete Hotel
// export async function deleteHotel(id: string) {
//   const response = await axios.delete(`/api/hotels/${id}`);
//   return response.data;
// }

// export async function updateHotel(
//   id: string,
//   data: HotelPayload
// ) {
//   const response = await axios.put(`/api/hotels/${id}`, data);
//   return response.data;
// }
// export async function updateHotel(
//   id: string,
//   data: HotelPayload
// ) {
//   const response = await axios.put(`/api/hotels/${id}`, data);
//   return response.data;
// }
// import axios from "axios";

// export interface HotelPayload {
//   title: string;
//   location: string;
//   category: string;
//   pricePerNight: number;
//   rating: number;
//   shortDescription: string;
//   description: string;
//   images: string[];
//   amenities: string[];
//   featured: boolean;
// }

// export interface GetHotelsParams {
//   search?: string;
//   category?: string;
//   location?: string;
//   featured?: boolean;
//   sort?: string;
//   page?: number;
//   limit?: number;
// }

// // Create Hotel
// export async function createHotel(data: HotelPayload) {
//   const response = await axios.post("/api/hotels", data);
//   return response.data;
// }

// // Get All Hotels
// export async function getHotels(params?: GetHotelsParams) {
//   const response = await axios.get("/api/hotels", {
//     params,
//   });

//   return response.data;
// }

// // Get Featured Hotels
// export async function getFeaturedHotels() {
//   const response = await axios.get("/api/hotels", {
//     params: {
//       featured: true,
//     },
//   });

//   return response.data;
// }

// // Get Hotel By ID (Admin Edit)
// export async function getHotelById(id: string) {
//   const response = await axios.get(`/api/hotels/${id}`);
//   return response.data;
// }

// // Get Hotel By Slug (Hotel Details)
// export async function getHotelBySlug(slug: string) {
//   const response = await axios.get(`/api/hotels/by-slug/${slug}`);
//   return response.data;
// }

// // Update Hotel
// export async function updateHotel(
//   id: string,
//   data: HotelPayload
// ) {
//   const response = await axios.put(`/api/hotels/${id}`, data);
//   return response.data;
// }

// // Delete Hotel
// export async function deleteHotel(id: string) {
//   const response = await axios.delete(`/api/hotels/${id}`);
//   return response.data;
// }
import axios from "axios";

export interface HotelPayload {
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  shortDescription: string;
  description: string;
  images: string[];
  amenities: string[];
  featured: boolean;
}

export interface GetHotelsParams {
  search?: string;
  category?: string;
  location?: string;
  featured?: boolean;
  sort?: string;
  page?: number;
  limit?: number;
}

// Create Hotel
export async function createHotel(data: HotelPayload) {
  const response = await axios.post("/api/hotels", data);
  return response.data;
}

// Get Hotels (Search, Filter, Sort, Pagination)
export async function getHotels(params?: GetHotelsParams) {
  const response = await axios.get("/api/hotels", {
    params,
  });

  return response.data;
}

// Get Featured Hotels
export async function getFeaturedHotels() {
  const response = await axios.get("/api/hotels", {
    params: {
      featured: true,
      limit: 8,
    },
  });

  return response.data.hotels;
}

// Get Hotel By ID
export async function getHotelById(id: string) {
  const response = await axios.get(`/api/hotels/${id}`);
  return response.data;
}

// Get Hotel By Slug
export async function getHotelBySlug(slug: string) {
  const response = await axios.get(`/api/hotels/by-slug/${slug}`);
  return response.data;
}

// Update Hotel
export async function updateHotel(
  id: string,
  data: HotelPayload
) {
  const response = await axios.put(`/api/hotels/${id}`, data);
  return response.data;
}

// Delete Hotel
export async function deleteHotel(id: string) {
  const response = await axios.delete(`/api/hotels/${id}`);
  return response.data;
}