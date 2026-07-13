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

// Create Hotel
export async function createHotel(data: HotelPayload) {
  const response = await axios.post("/api/hotels", data);
  return response.data;
}

// Get All Hotels
export async function getHotels() {
  const response = await axios.get("/api/hotels");
  return response.data;
}

// Get Single Hotel
export async function getHotel(id: string) {
  const response = await axios.get(`/api/hotels/${id}`);
  return response.data;
}

// Delete Hotel
export async function deleteHotel(id: string) {
  const response = await axios.delete(`/api/hotels/${id}`);
  return response.data;
}