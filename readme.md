Objective:

Design a Node.js GET API that supports pagination and filtering for fetching product details from a database based on specified parameters. The API should handle various parameters such as current page, page size, order by, order direction, and search by field.
 
API Requirements:
 
1. Endpoint:

   - Design a GET endpoint for fetching product details.
 
2. Parameters:

   - Implement the following parameters in the API:

     - `currentPage`: Current page number.

     - `pageSize`: Number of items per page.

     - `orderBy`: Field to order the results by.

     - `orderDir`: Order direction (ascending/descending).

     - `searchBy`: Field name for searching.

     - `searchFields`: Array of column names to be searched.
 
3. Default Values:

   - If any of the parameters is not provided, use the following default values:

     - `pageSize`: 10

     - `currentPage`: 1

     - `orderBy`: 'createdAt'

     - `orderDir`: 'desc'

     - `searchBy`: ""

     - `searchFields`: []
 
4. Data Fetching:

   - Fetch product details from the database based on the provided parameters.

   - Retrieve the following details for each product:

     - `productId`

     - `productName`

     - `productImageName`

     - `productImageURL`

     - `brandName`

     - `description`

     - `itemCode`

     - `itemType`

     - `currency`

     - `currencyCode`

     - `saleAmount`

     - `brochureFileName`

     - `brochureFileURL`

     - `vendors`

     - `status`

     - `createdBy`

     - `created`

     - `updated`

     - `subCategoryId`

     - `categoryId`

     - `uomId`

     - `shippingMethodId`

     - `shippingTermsId`

     - `paymentTermsId`

     - `categoryName`

     - `subCategoryName`

     - `uomCode`

     - `uomDescription`

     - `organisationName`

     - `organisationId`

     - `vendorInfo`
Note: These are not the keys for table, this is the response from the API that we are expecting. So checkout the Table before starting the Test, All the provided details should be in the response.
 
5. Filtering:

   - Implement filtering based on the `searchBy` field.

   - Allow users to search data using any field name.

   - If `searchBy` is provided along with `searchField`:

     - The API should filter the results based on the provided field name and search term.

     - If `searchBy` is given as "product1", the search will be performed using the term "product1".

   - The `searchFields` parameter should contain the column names to be searched. If `searchFields` are provided, only those specified columns need to be searched. Otherwise, the search will be performed across all columns.

     - Example: If `searchBy` is provided as "product1" and `searchFields` are provided as ["productName", "description"], the API should only search in the `productName` and `description` columns for the term "product1".

   - If `searchBy` is an empty string and `searchFields` is an empty array, the API should return all records without any filtering.
 
6. Response Format:

   - The response should be a JSON object with the following structure:

     {

       "currentPage": 1,

       "pageSize": 10,

       "totalPages": 3,

       "totalCount": 25,

       "data": [

         // Product details for the current page

       ]

     }
 
7. Additional Notes:

   - Ensure that the API responds correctly to various parameter combinations and handles errors gracefully.

   - The API should support proper error handling and validation for incoming parameters.

   - The API should be scalable and efficient in fetching and filtering large datasets.

   - Fetch the `vendorInfo` from the `VendorsOrganizations` table : 
           `vendorInfo : {
                                      VendorOrganizationId, CompanyName, OrganizationLogoUrl, OrganizationLogoName
                                 }`

   - For other details like `Uom`, `Category`, `SubCategory`, etc., check the indexes of `ProductV2`.

   - Use the core query instead of Sequelize or other ORM.
   - Search Functionality should work (Eg :- SearchBy : "Te", searchField : ['productName', 'description'])

   - Test should be in proper structure (Controller, Model, helper, dbconfig, etc).
 
 
 
myphpAdmin - https://db-technical-test.conqt.com/
DB User - candidate
DB Pass - NoTeDeSt^C10.6?SxwY882}
DB Host - nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com
Port  - 3306
phpMyAdmin
 