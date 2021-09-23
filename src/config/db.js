import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://jacksari:Shingekino123@cluster0.nclr5.mongodb.net/qpt', {

    });
    console.log('Base de datos conectada');
  } catch (e) {
    console.log(e);
    console.log('Error al conectar base de datos');
  }
};

module.exports = connectDatabase;
