import React ,{useState} from 'react';
import AWS from 'aws-sdk'

const S3_BUCKET ='oma-tree';
const REGION ='US East (Ohio) us-east-2';


AWS.config.update({
    accessKeyId: 'b7f00a46d4da6848891aa554241b1c7c614ce3d713aa8213b983e2f7cb3a5f04',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY_HERE'
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})

const UpLoad = () => {

    const [progress , setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
    }

    const uploadFile = (file) => {

        const params = {
            ACL: 'public-read',
            Body: file,
            Bucket: S3_BUCKET,
            Key: file.name
        };

        myBucket.putObject(params)
            .on('httpUploadProgress', (evt) => {
                setProgress(Math.round((evt.loaded / evt.total) * 100))
            })
            .send((err) => {
                if (err) console.log(err)
            })
    }


    return <div>
        <div>Click the button to find the file you wish to up load {progress}%</div>
        <input type="file" onChange={handleFileInput}/>
        <button onClick={() => uploadFile(selectedFile)}> Upload to Oma's Tree</button>
    </div>
}

export default UpLoad;