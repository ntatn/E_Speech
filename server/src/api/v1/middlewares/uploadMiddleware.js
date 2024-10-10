import multer from 'multer'


// Tạo middleware multer cho việc upload
const storage = multer.diskStorage({
    destination: './src/api/v1/uploads/',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });



export default  upload
