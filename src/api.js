export async function getTracks() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/')
    return response.json();;
}
