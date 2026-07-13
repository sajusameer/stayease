import axios from "axios";

export interface BookingPayload {
  hotelId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

// Create Booking
export async function createBooking(data: BookingPayload) {
  const response = await axios.post("/api/bookings", data);
  return response.data;
}

// Get All Bookings
export async function getBookings() {
  const response = await axios.get("/api/bookings");
  return response.data;
}