import { v2  as cloudinary} from 'cloudinary'




cloudinary.config({
    cloud_name:'dgbhheqgy',
    api_key:'146156465818285',
    api_secret:'vfQ0XsOQcVAVP0pSgwAHOWgeU_E'
})



export const uploadcloud=(img)=>{

cloudinary.uploader.upload(img.tempFilePath).then(result=>  console.log(result))



}


export default cloudinary