function getPaginationParams(currentPage, pageSize) {
    const page = parseInt(currentPage, 10) || 1;
    const size = parseInt(pageSize, 10) || 10;
    const offset = (page - 1) * size;
    return { limit: size, offset, page };
  }
  
  module.exports = { getPaginationParams };