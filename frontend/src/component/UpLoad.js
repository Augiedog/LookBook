import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import AWS from 'aws-sdk'
import { Container } from 'react-bootstrap'
import { CurrentUser } from '../contexts/currentUser'

const S3_BUCKET = process.env.REACT_APP_S3_BUCKET;
const REGION = process.env.REACT_APP_REGION;

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
    const { currentUser } = useContext(CurrentUser)

    const [picture, setPicture] = useState({
        fileName: '',
        picUrl: '',
        description: '',
        authorId: ''
    })
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState({ name: '' });

    const handleFileInput = (e) => {
        const nameFile = e.target.files[0].name
        const spacedUrl = 'https://oma-tree.s3.us-east-2.amazonaws.com/picture/' + nameFile.replaceAll(' ', '+')
        setSelectedFile(e.target.files[0])
        setPicture({
            ...picture,
            fileName: nameFile,
            picUrl: spacedUrl,
            authorId: currentUser.userId
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        await fetch(process.env.REACT_APP_API + `/pictures`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(picture)
        })
        history(`/pictures`)
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
            </form>
        </Container>
    )
}

export default UpLoad;