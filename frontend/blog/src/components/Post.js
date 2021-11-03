import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import convertFormat from '../function/Convert.js'

/**
* @author
* @function Post
**/

const Post = (props) => {
    const [articleList, setArticle] = useState([]);

    useEffect(() => {
        console.log(`${process.env.REACT_APP_END_POINT}/api/articles/${props.match.params.postId}/`)
        axios
        .get(`${process.env.REACT_APP_END_POINT}/api/articles/${props.match.params.postId}/`)
          .then(res => {
              const articleList = res.data[0];
              setArticle(articleList);
          })
          .catch(err => {
              console.log(err);
        });
    }, [props.match.params.postId]);

    const deleteArticle = () => {

        if(window.confirm('この記事を削除してよろしいですか？')) {
            axios.delete(`${process.env.REACT_APP_END_POINT}/api/articles/${articleList.uuid}/`)
            .then(res => {
                window.location.href="/";
            }).catch(err => {
                console.log(err);
            });
        }
    }

  return(
    <div>
        <Card
             key={`ranking-item-${articleList.uuid }`}
             style={{ maxWidth: '1000px', margin: '32px auto'}}
             src={`post/${articleList.uuid}`}
        >
            { articleList.image && 
          <CardMedia
            image={process.env.REACT_APP_END_POINT+articleList.image}
            title={articleList.title}
            style={{ height: '400px' }}
          />
            }
          <CardContent style={{ textAlign: 'left' }}>
            <Typography variant="h3" type="title" style={{margin:'0 0 20px 0'}}>
              {articleList.title}
            </Typography>

            <Typography className='right-placement' type="title" >
              {convertFormat(articleList.created_at)}
            </Typography>

            <Typography variant="h5" type="title" style={{margin:'0 0 20px 0'}}>
              {articleList.body}
            </Typography>

            <div className="right-placement">
            <Button onClick={deleteArticle} variant="contained" color="secondary" size="small">
              <DeleteIcon />
                削除
            </Button>
            </div>
          </CardContent>
        </Card>    
    </div>
   )
 }

export default Post