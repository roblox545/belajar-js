export default async function blog({
    params,
}:{
    params: Promise<{blogID: string}>;
}) {
    const blogID = (await params).blogID;
    return <h1>Details about blog {blogID} </h1>;
}