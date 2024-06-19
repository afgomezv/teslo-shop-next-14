// [1,2,3,4,5,...,7]
// [1,2,3,...,48,49,50]
export const generatePaginationNumbers = (
  currentPage: number,
  totalPages: number
) => {
  // Si el número total páginas es 7 o menos
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1); // [1,2,3,4,5,6,7]
  }

  // Si la página actual está entre las primeras 3 páginas
  // mostrar las primeras 3 páginas, puntos suspensivos, y las ultimas 2

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages]; // [12,2,3,"...",49,50]
  }

  // Si la página actual esta entre las últimas 3 paginas
  // mostrar las primeras 2, puntos suspensivos, las ultimas 3 página
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // Si la página actual está en otro lugar medio
  // mostrar la primera página, puntos suspensivos, la pagina actual y vecinos
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
