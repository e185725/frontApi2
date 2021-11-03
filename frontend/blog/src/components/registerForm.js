import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

export default class registerForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            image: null,
        };

        this.titleChange = this.titleChange.bind(this);
        this.bodyChange = this.bodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    addArticle(title, body, image) {
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

    titleChange(event) {
        this.setState({
            title: event.target.value,
        });
    }

    bodyChange(event) {
        this.setState({
            body: event.target.value,
        });
    }

    imageChange = (e) => {
      this.setState({
        image: e.target.files[0],
      })
    };

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.title === ''){
            return;
        }
        if(this.state.body === ''){
            return;
        }
        this.setState({
            title: '',
            body: '',
            image: ''
        });
        this.addArticle(this.state.title, this.state.body, this.state.image);
    }

    render() {
        return (
            <div className="form central-placement">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-element">
                        <input type="text" value={this.state.title} onChange={this.titleChange} className="form-element--title" placeholder="タイトル" />
                    </div>
                    <div className="form-element">
                        <textarea type="text" value={this.state.body} onChange={this.bodyChange} className="form-element--body" placeholder="本文" />
                    </div>
                    <div className="form-element">
                        <input type="file"
                           accept="image/png, image/jpeg"  onChange={this.imageChange} />
                    </div>
                    <div className="right-placement">
                        <Button variant="contained" color="primary" type="submit">新規作成</Button>
                    </div>
                </form>
            </div>
        );
    }
}
