const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  let result = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  // console.log(result);
  return result;
};

export default getCroppedImageUrl;
