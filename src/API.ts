export const initialTours: Array<TourType> = [
  { id: "", name: "", info: "", image: "", price: "" },
];

export type TourType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

// export const getData = async () => {
//   const data = await fetchTours(url)
//   return data
// }
// export type ToursType = {
//   array: TourType;
// };
