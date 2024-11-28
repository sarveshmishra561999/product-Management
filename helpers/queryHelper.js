exports.buildSearchQuery=(searchBy,searchFields)=>{
if(!searchBy||!searchFields.length) return "";
const condition=searchFields.map(field=>`${field} Like '%${searchBy}'`)
return `AND (${condition.join(' OR ')})`;
}