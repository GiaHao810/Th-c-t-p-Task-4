export function isYouTubeUrl(url) {
    return /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)/.test(url);
}

export function isTikTokUrl(url) {
    return /^(https?:\/\/)?(www\.)?tiktok\.com\//.test(url);
}

export function isInstagramUrl(url) {
    return /^(https?:\/\/)?(www\.)?instagram\.com\//.test(url);
}