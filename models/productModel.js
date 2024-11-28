const db = require('../config/dbConfig');
exports.getProducts = async (params) => {
    const { currentPage, pageSize, orderBy, orderDir, searchBy, searchFields } = params;
    const offset = (currentPage - 1) * pageSize;
    const searchQuery = require('../helpers/queryHelper.js')
    let baseQueryNew=searchQuery.buildSearchQuery(searchBy,searchFields)
    const baseQuery = `
    SELECT
    p.productId,p.productName,p.productImagesName,p.productImagesURLs,
    p.brandName,p.createdBy,p.createdAt,p.updatedAt,p.subCategoryId,
    p.categoryid,p.uomid,p.shipingMethodId,p.shippingTermId,
    p.paymentTermid,c.categoryName,sc.subCategoryName,u.code,
    u.description,vo.CompanyName as organisationName,
    vo.VendorOrganizationId as organisationid,p.description,p.itemCode,
    p.itemType,cu.name,cu.code,p.saleAmount,
    p.broshureFileName,p.broshureURLs
    FROM ProductV2 p
    LEFT JOIN Categories c ON p.categoryid=c.categoryid
    LEFT JOIN SubCategories sc ON p.subCategoryid=sc.categoryid
    LEFT JOIN CustomerUOM u ON p.uomid=u.uomid
    LEFT JOIN 	VendorsOrganizations vo ON p.VendorOrganizationid=vo.VendorOrganizationid
    LEFT JOIN currency cu ON pCurrencyid=vo.Currencyid
    WHERE 1=1 ${baseQueryNew}
    ORDER BY ${orderBy} ${orderDir}
    LIMIT ${offset}, ${pageSize}
    `
   
    console.log(JSON.stringify(baseQueryNew))
    console.log(baseQuery)
    const [data] = await db.query(baseQuery)
    const [[{ totalCount }]] = await db.query(countQuery);
    return { data, totalCount };
}
