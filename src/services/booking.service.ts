// import axios from "axios";

// export interface BookingPayload {
//   hotelId: string;
//   userId: string;
//   checkIn: string;
//   checkOut: string;
//   guests: number;
//   totalPrice: number;
// }

// // Create Booking
// export async function createBooking(data: BookingPayload) {
//   const response = await axios.post("/api/bookings", data);
//   return response.data;
// }

// // Get All Bookings
// export async function getBookings() {
//   const response = await axios.get("/api/bookings");
//   return response.data;
// }

// export async function getMyBookings(userId: string) {
//   const response = await axios.get("/api/bookings", {
//     params: {
//       userId,
//     },
//   });

//   return response.data;
// }
import axios from "axios";

export interface BookingPayload {
  hotelId: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

export interface GetBookingsParams {
  userId?: string;
}

// Create Booking
export async function createBooking(data: BookingPayload) {
  const response = await axios.post("/api/bookings", data);
  return response.data;
}

// Get All Bookings
export async function getBookings(params?: GetBookingsParams) {
  const response = await axios.get("/api/bookings", {
    params,
  });

  return response.data;
}

// Get My Bookings
export async function getMyBookings(userId: string) {
  const response = await axios.get("/api/bookings", {
    params: {
      userId,
    },
  });

  return response.data;
}

// Delete Booking (Future)
export async function deleteBooking(id: string) {
  const response = await axios.delete(`/api/bookings/${id}`);
  return response.data;
}