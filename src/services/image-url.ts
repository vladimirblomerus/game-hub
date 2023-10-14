const getCroppedImageUrl = (url: string) => {
    const target = "media/";
    const imageWidth = 600;
    const imageHeight = 400;
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + `crop/${imageWidth}/${imageHeight}/` + url.slice(index);
}

export default getCroppedImageUrl;