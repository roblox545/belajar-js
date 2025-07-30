export default async function blogcomments({
    params,
}:{
    params: Promise<{blogID: string, commentsID: string}>
}) {
    const {blogID, commentsID} = await params
    return(
     <h1>comments {commentsID} for product {blogID} </h1>
    )
    
}