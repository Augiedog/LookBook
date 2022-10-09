import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import AWS from 'aws-sdk'
import { Container } from 'react-bootstrap'



const S3_BUCKET = 'oma-tree/picture';
const REGION = 'us-east-2';


AWS.config.update({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
})

const UpLoad = () => {
    const history = useNavigate()
    const [picture, setPicture] = useState({
        fileName: '',
        picUrl: '',
        description: '',
        authorId: ''
    })
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0])
        console.log("File Name to upLoad--", e.target.files[0].name)
        setPicture({ ...picture, fileName: {e.target.files[0].name} })
        setPicture({ ...picture, authorId: 2 })
        // setPicture({ ...picture, picUrl: e.target.value })
    }
    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(`http://192.168.0.29:5000/pictures`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(picture)
        })

        history.push('/pictures')
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
    // console.log('recbeccaILoveYou-->C===3', selectedFile.name)
    console.log("will go to bucket", selectedFile)
    console.log("will go to table", picture)
    
    return (
        <Container>
            <h1>Add a New Picture</h1>
            <form onSubmit={handleSubmit}>             
                {/* <input className="btn btn-primary" type="submit" value="Add Place" /> */}
                <div><p>Click the button to find the file you wish to upload</p> {progress}%</div>
                <input type="file" onChange={handleFileInput} />              
                
                <div className="form-group">
                    <label htmlFor="description">Caption</label>
                    <input
                        required
                        value={picture.description}
                        onChange={e => setPicture({ ...picture, description: e.target.value })}
                        className="form-control"
                        id="descrption"
                        name="descrption"
                    />
                </div>
                <br />
                <button onClick={() => uploadFile(selectedFile)} className="btn btn-primary" type="submit"> Upload to Oma's Tree</button>
                <br />
                
                {/* <div className="form-group">
                    <label htmlFor="name">fileName here for testing</label>
                    <input
                        required
                        value={picture.fileName}
                        onChange={e => setPicture({ ...picture, fileName: e.target.value })}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="authorId">authorId here for testing</label>
                    <input
                        value={picture.authorId}
                        onChange={e => setPicture({ ...picture, authorId: e.target.value })}
                        className="form-control"
                        id="authorId"
                        name="authorId"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">picUrl here for testing</label>
                    <input
                        value={picture.picUrl}
                        onChange={e => setPicture({ ...picture, picUrl: e.target.value })}
                        className="form-control"
                        id="picUrl"
                        name="picUrl"
                    />
                </div> */}

            </form>
        </Container>
    )
}

export default UpLoad;