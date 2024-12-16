const { fetchProducts } = require('../models/productModel');
const { getPaginationParams } = require('../helpers/paginationHelper');

async function getProducts(req, res) {
  try {
    const {
      currentPage = 1,
      pageSize = 10,
      orderBy = 'createdAt',
      orderDir = 'desc',
      searchBy = '',
      searchFields = [],
    } = req.query;

    const validOrderDir = orderDir.toLowerCase() === 'asc' ? 'ASC' : 'DESC';

    const pagination = getPaginationParams(currentPage, pageSize);
    const products = await fetchProducts({
      ...pagination,
      orderBy,
      orderDir: validOrderDir,
      searchBy,
      searchFields: Array.isArray(searchFields) ? searchFields : [searchFields],
    });

    res.json({
      currentPage: pagination.page,
      pageSize: pagination.limit,
      totalPages: Math.ceil(products.totalCount / pagination.limit),
      totalCount: products.totalCount,
      data: products.rows,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getProducts };
