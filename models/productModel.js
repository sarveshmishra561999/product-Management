const db = require('../config/dbConfig');

async function fetchProducts(params) {
    const { limit, offset, orderBy, orderDir, searchBy, searchFields } = params;
      let whereClause = '';
    let searchParams = [];
      if (searchBy && searchFields.length > 0) {
      const conditions = searchFields
        .map(field => `p.${field} LIKE ?`)
        .join(' OR ');
      whereClause = `WHERE ${conditions}`;
      searchParams = Array(searchFields.length).fill(`%${searchBy}%`);
    }
  
    const query = `
      SELECT p.*
      FROM ProductV2 p
      ${whereClause}
      ORDER BY p.${orderBy} ${orderDir}
      LIMIT ? OFFSET ?`;
  
    const queryParams = [...searchParams, limit, offset];
  
    const [rows] = await db.query(query, queryParams);
  
    const countQuery = `
      SELECT COUNT(*) AS totalCount
      FROM ProductV2 p
      ${whereClause}`;
    const [countResult] = await db.query(countQuery, searchParams);
  
    const totalCount = countResult[0].totalCount;
  
    return { rows, totalCount };
  }
  
module.exports = { fetchProducts };
