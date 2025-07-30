export default async function productReviews({
    params,
}:{
    params: Promise<{productID: string, reviewsID: string}>
}) {
    const {productID, reviewsID} = await params
    return(
     <h1>Reviews {reviewsID} for product {productID} </h1>
    )
    
}