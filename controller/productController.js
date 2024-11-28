const productModel=require('../models/productModel')
exports.fetchProducts=async (req,res)=>{
    try {
        console.log("request recieved")
        const{
            currentPage=1,
            pageSize=10,
            orderBy='createdAt',
            orderDir='desc',
            searchBy='',
            searchFields=[],
        }=req.query;

        const params={
            currentPage:parseInt(currentPage,10),
            pageSize:parseInt(pageSize,10),
            orderBy,
            orderDir:orderDir.toLowerCase()==='asc' ? 'ASC':'DESC',
            searchBy,
            searchField:Array.isArray(searchFields) ? searchFields:[]
        }
        const {data,totalCount}=await productModel.getProducts(params)
        res.status(200).json({
            currentPage:params.currentPage,
            pageSize:params.pageSize,
            totalPages:Math.ceil(totalCount/params.pageSize),
            totalCount,
            data
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}