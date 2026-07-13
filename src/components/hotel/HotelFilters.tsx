"use client";

export default function HotelFilters() {
  return (
    <div className="mb-10 rounded-3xl border bg-base-100 p-6 shadow-md">
      <div className="grid gap-4 md:grid-cols-3">

        <input
          type="text"
          placeholder="Search hotels..."
          className="input input-bordered w-full"
        />

        <select className="select select-bordered w-full">
          <option value="">All Categories</option>
          <option>Luxury</option>
          <option>Resort</option>
          <option>Business</option>
          <option>Budget</option>
          <option>Boutique</option>
        </select>

        <select className="select select-bordered w-full">
          <option value="">Newest</option>
          <option value="price-low">
            Price Low to High
          </option>
          <option value="price-high">
            Price High to Low
          </option>
          <option value="rating">
            Highest Rating
          </option>
        </select>

      </div>
    </div>
  );
}