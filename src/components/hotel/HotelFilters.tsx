// "use client";

// export default function HotelFilters() {
//   return (
//     <div className="mb-10 rounded-3xl border bg-base-100 p-6 shadow-md">
//       <div className="grid gap-4 md:grid-cols-3">

//         <input
//           type="text"
//           placeholder="Search hotels..."
//           className="input input-bordered w-full"
//         />

//         <select className="select select-bordered w-full">
//           <option value="">All Categories</option>
//           <option>Luxury</option>
//           <option>Resort</option>
//           <option>Business</option>
//           <option>Budget</option>
//           <option>Boutique</option>
//         </select>

//         <select className="select select-bordered w-full">
//           <option value="">Newest</option>
//           <option value="price-low">
//             Price Low to High
//           </option>
//           <option value="price-high">
//             Price High to Low
//           </option>
//           <option value="rating">
//             Highest Rating
//           </option>
//         </select>

//       </div>
//     </div>
// //   );
// // }
// "use client";

// interface HotelFiltersProps {
//   search: string;
//   category: string;
//   sort: string;

//   onSearchChange: (value: string) => void;
//   onCategoryChange: (value: string) => void;
//   onSortChange: (value: string) => void;
// }

// export default function HotelFilters({
//   search,
//   category,
//   sort,
//   onSearchChange,
//   onCategoryChange,
//   onSortChange,
// }: HotelFiltersProps) {
//   return (
//     <div className="mb-10 rounded-3xl border bg-base-100 p-6 shadow-md">
//       <div className="grid gap-4 md:grid-cols-3">
//         <input
//           type="text"
//           placeholder="Search hotels..."
//           value={search}
//           onChange={(e) => onSearchChange(e.target.value)}
//           className="input input-bordered w-full"
//         />

//         <select
//           value={category}
//           onChange={(e) => onCategoryChange(e.target.value)}
//           className="select select-bordered w-full"
//         >
//           <option value="">All Categories</option>
//           <option value="Luxury">Luxury</option>
//           <option value="Resort">Resort</option>
//           <option value="Business">Business</option>
//           <option value="Budget">Budget</option>
//           <option value="Boutique">Boutique</option>
//         </select>

//         <select
//           value={sort}
//           onChange={(e) => onSortChange(e.target.value)}
//           className="select select-bordered w-full"
//         >
//           <option value="">Newest</option>

//           <option value="price-low">
//             Price Low to High
//           </option>

//           <option value="price-high">
//             Price High to Low
//           </option>

//           <option value="rating">
//             Highest Rating
//           </option>
//         </select>
//       </div>
//     </div>
//   );
// }
"use client";

interface HotelFiltersProps {
  search: string;
  category: string;
  location: string;
  sort: string;

  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export default function HotelFilters({
  search,
  category,
  sort,
   location,
  onSearchChange,
  onCategoryChange,
  onLocationChange,
  onSortChange,
}: HotelFiltersProps) {
  return (
    <div className="mb-10 rounded-3xl border bg-base-100 p-6 shadow-md">
      <div className="grid gap-4 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search hotels..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="input input-bordered w-full"
        />

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="">All Categories</option>
          <option value="Luxury">Luxury</option>
          <option value="Resort">Resort</option>
          <option value="Business">Business</option>
          <option value="Budget">Budget</option>
          <option value="Boutique">Boutique</option>
        </select>
        <select
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="select select-bordered w-full"
        >
          <option value="">All Locations</option>
          <option value="Rangamati">Rangamati</option>
          <option value="Chattogram">Chattogram</option>
          <option value="Cox's Bazar">Cox's Bazar</option>
          <option value="Sylhet">Sylhet</option>
        </select>

        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value)}
          className="select select-bordered w-full"
        >
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