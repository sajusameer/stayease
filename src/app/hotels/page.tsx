// "use client";

// import { useEffect, useState } from "react";

// import { getHotels } from "@/services/hotel.service";

// import HotelGrid from "@/components/hotel/HotelGrid";
// import SectionTitle from "@/components/common/SectionTitle";
// import Container from "@/components/common/Container";
// import HotelFilters from "@/components/hotel/HotelFilters";

// export default function HotelsPage() {
//   const [hotels, setHotels] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadHotels() {
//       try {
//         const data = await getHotels();
//         // setHotels(data);
//         setHotels(data.hotels);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadHotels();
//   }, []);

//   return (
//     <section className="py-16">
//       <Container>

//         <SectionTitle
//           badge="Hotels"
//           title="Discover Amazing Hotels"
//           subtitle="Browse our premium hotel collection."
//         />

//         <HotelFilters />

//         {loading ? (
//           <div className="py-20 text-center">
//             Loading...
//           </div>
//         ) : (
//           <HotelGrid hotels={hotels} />
//         )}

//       </Container>
//     </section>
//   );
// } 
"use client";

import { useEffect, useState } from "react";

import { getHotels } from "@/services/hotel.service";

import HotelGrid from "@/components/hotel/HotelGrid";
import SectionTitle from "@/components/common/SectionTitle";
import Container from "@/components/common/Container";
import HotelFilters from "@/components/hotel/HotelFilters";

export default function HotelsPage() {
  // const [hotels, setHotels] = useState([]);

  // const [loading, setLoading] = useState(true);

  // const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("");
  // const [sort, setSort] = useState("");

  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const [hotels, setHotels] = useState([]);

const [loading, setLoading] = useState(true);

const [search, setSearch] = useState("");
const [category, setCategory] = useState("");
const [location, setLocation] = useState("");
const [sort, setSort] = useState("");

const [page, setPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function loadHotels() {
      setLoading(true);

      try {
        const data = await getHotels({
          search,
          category,
          sort,
          location,
          page,
          limit: 8,
        });

        setHotels(data.hotels);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadHotels();
  }, [search, category, location, sort, page]);

  return (
    <section className="py-16">
      <Container>
        <SectionTitle
          badge="Hotels"
          title="Discover Amazing Hotels"
          subtitle="Browse our premium hotel collection."
        />

        <HotelFilters
          search={search}
          category={category}
          sort={sort}
          location={location}
          onSearchChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
          onCategoryChange={(value) => {
            setCategory(value);
            setPage(1);
          }}
            onLocationChange={(value) => {
          setLocation(value);
          setPage(1);
        }}
          onSortChange={(value) => {
            setSort(value);
            setPage(1);
          }}
        />

        {loading ? (
          <div className="py-20 text-center">
            Loading...
          </div>
        ) : (
          <>
            <HotelGrid hotels={hotels} />

            {totalPages > 1 && (
              <div className="mt-10 flex justify-center gap-2">
                <button
                  className="btn"
                  disabled={page === 1}
                  onClick={() => setPage((prev) => prev - 1)}
                >
                  Previous
                </button>

                <span className="flex items-center px-4 font-semibold">
                  {page} / {totalPages}
                </span>

                <button
                  className="btn"
                  disabled={page === totalPages}
                  onClick={() => setPage((prev) => prev + 1)}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}