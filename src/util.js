export const resizeImage = (originalImage, newSize) =>{
    const newImage = originalImage.match(/screenshots/)
    ? originalImage.replace("media/screenshots", `media/resize/${newSize}/-/screenshots`)
    : originalImage.replace("/media/games/", `/media/resize/${newSize}/-/games/`);
    return newImage;
}