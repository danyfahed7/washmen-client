
export async function fetchPartners(range:any, root:any[]) {
    const response = await fetch('/api/partners/'+range+'&'+root);
    return await response.json();
}