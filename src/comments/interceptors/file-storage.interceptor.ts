import { diskStorage } from "multer";
import { extname } from "path";

export const fileStorage = diskStorage({
  // la carpeta donde se almacena los archivos que se iran subiendo
  destination: './uploads', 
  // Definir como se nombran los archivos subidos
  filename: (req, file, cb) => {
    try {
      // generar un nombre aleatorio de 32 caracteres
      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
      cb(null, `${randomName}${extname(file.originalname)}` );
    } catch (error) {
      cb(error, null)
    }
  }
})