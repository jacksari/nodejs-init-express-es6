const { v4: uuidv4 } = require('uuid');

const filePath = (fileImage, category, file) => {
  const myFileImage = fileImage.name.split('.');
  const fileTypeImage = myFileImage[myFileImage.length - 1];

  // let nameFileImage = `${myFileImage[0]}-${uuidv4()}.${fileTypeImage}`;
  const nameFileImage = `${uuidv4()}.${fileTypeImage}`;
  const pathFileImage = (`./src/public/${file}/${category}/${nameFileImage}`);

  return pathFileImage;
};

module.exports = {
  filePath,
};
