import React,{useState} from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { postAdded } from './postsSlice';
export const RegisterForm2 = () => {

    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [image,setImage] = useState(null)

    const dispatch = useDispatch()

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onBodyChanged = (e) => setBody(e.target.value)

    const onImageChanged = (e) => setImage(e.target.files[0])


    const addArticle = (title, body, image) => {
        let form_data = new FormData();

        if(image){
          form_data.append('image', image, image.name);
        }

        form_data.append('title', title);
        form_data.append('body', body);

        axios.post(`${process.env.REACT_APP_END_POINT}/api/articles/`, form_data,{headers: {
                'content-type': 'multipart/form-data'
            }
         }).then(res => {
            window.location.href="/";
        }).catch(err => {
            console.log(err);
        });
    }


    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (title && body && image) {
            dispatch(
                postAdded({
                    title,
                    body,
                    image
                })
            )

            addArticle(title,body,image)

            setTitle('')
            setBody('')
            setImage(null)
        }

        
    }



    return (
        <div className="form central-placement">
            <form onSubmit={onhandleSubmit}>
                <div className="form-element">
                    <input type="text" value={title} onChange={onTitleChanged} className="form-element--title" placeholder="タイトル" />
                </div>
                <div className="form-element">
                    <textarea type="text" value={body} onChange={onBodyChanged} className="form-element--body" placeholder="本文" />
                </div>
                <div className="form-element">
                    <input type="file"
                       accept="image/png, image/jpeg"  onChange={onImageChanged} />
                </div>
                <div className="right-placement">
                    <Button variant="contained" color="primary" type="submit">新規作成</Button>
                </div>
            </form>
        </div>
    );
}
