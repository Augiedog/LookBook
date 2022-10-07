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
        discription: '',
        authorId: ''
    })
    const [progress, setProgress] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileInput = (e) => {
        setSelectedFile(e.target.files[0]);
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



    return (
        <Container>
            <h1>Add a New Picture</h1>
            {/* <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Picture Name</label>
                    <input
                        required
                        value={name}
                        onChange={e => setPicture({ ...picture, fileName: e.target.value })}
                        className="form-control"
                        id="name"
                        name="name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="founded">Year Founded</label>
                    <input
                        required
                        value={place.founded}
                        onChange={e => setPlace({ ...place, founded: e.target.value })}
                        className="form-control"
                        id="founded"
                        name="founded"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input
                        value={place.pic}
                        onChange={e => setPlace({ ...place, pic: e.target.value })}
                        className="form-control"
                        id="pic"
                        name="pic"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        value={place.city}
                        onChange={e => setPlace({ ...place, city: e.target.value })}
                        className="form-control"
                        id="city"
                        name="city"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <input
                        value={place.state}
                        onChange={e => setPlace({ ...place, state: e.target.value })}
                        className="form-control"
                        id="state"
                        name="state"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input
                        value={place.cuisines}
                        onChange={e => setPlace({ ...place, cuisines: e.target.value })}
                        className="form-control"
                        id="cuisines" name="cuisines" required />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />
            </form> */}
            <div>Click the button to find the file you wish to up load {progress}%</div>
            <input type="file" onChange={handleFileInput} />
            <button onClick={() => uploadFile(selectedFile)}> Upload to Oma's Tree</button>
        </Container>
    )
}

export default UpLoad;