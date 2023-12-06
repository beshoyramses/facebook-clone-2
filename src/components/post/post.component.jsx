import React, { useContext, useState, useEffect } from 'react';
import { Input } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/joy/Button';
import { addLike, removeLike, addComment, getComments } from '../../utils/firebase';
import { UserContext } from '../../context/userContext/user.context';
import './post.styles.css';

let defaultCommentField = {
  comment: '',
};

const PostComponent = ({ props }) => {
  const { currentUser } = useContext(UserContext);
  const { title, link, photoURL, name, timestamp, id, likes, uid } = props;

  let likesArray = likes !== undefined ? Object.keys(likes).reduce((result, key) => {
    if (likes[key] === true) {
      result[key] = likes[key];
    }
    return result;
  }, {}) : 0;

  const [commentField, setCommentField] = useState(defaultCommentField);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCommentField({ ...commentField, [name]: value });
  };

  let { comment } = commentField;

  const [liked, setLiked] = useState(likes && !!likes[currentUser.userId]);
  const [clicked, setClicked] = useState(false);
  const [comments, setComments] = useState([]);

  const getPostComments = async () => {
    try {
      const postComments = await getComments(uid, id);
      setComments(postComments || []); // Set comments to an empty array if there are no comments
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAddComment = async () => {
    try {
      // Call the addComment function to add a comment
      await addComment(id, uid, currentUser.photoURL, comment);

      // Fetch and update the comments for the post
      getPostComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleLikeClick = async () => {
    try {
      console.log('handleLikeClick called');
      // Check if the user has already liked the post
      if (!liked) {
        // Call the addLike function to add a like
        await addLike(id, uid, currentUser.uid);
      } else {
        // Call the removeLike function to remove a like
        await removeLike(id, uid, currentUser.uid);
      }
      console.log('handleLikeClick completed');
    } catch (error) {
      console.error('Error handling like:', error);
    }
  };

  const handleCommentClick = () => {
    console.log('clicked');
    setClicked(!clicked);
    // Fetch comments when the component mounts
    getPostComments();
  };

  useEffect(() => {
    // Update the state to reflect that the user has liked or unliked the post
    setLiked(likes && !!likes[currentUser.uid]);
  }, [likes, currentUser.uid]);
  console.log(comments)

  return (
    <div className="post-container">
      <div className="post-data">
        <img
          src={photoURL}
          alt="user"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'default_image.jpg';
          }}
        />
        <div className="info">
          <h4 className="username">
            {name} <span>uploaded a photo</span>
          </h4>
          <div className="time">{timestamp}</div>
        </div>
      </div>

      <div className="title">{title}</div>
      <img src={link} alt="" className="main-img" />
      <div className="reactions">
        <div className="like">
          <span>
            <ThumbUpIcon
              className={`thumb-icon ${liked ? 'clicked' : ''}`}
              onClick={() => {
                handleLikeClick();
              }}
            />
            Likes {likesArray !== null ? Object.keys(likesArray).length : 0}
          </span>
        </div>
        <div className="comments" onClick={handleCommentClick}>
          <span>
            <ChatBubbleIcon className="chat-icon" />Comment {comments.length}
          </span>
        </div>
        <div className="share">
          <span>
            <ShareIcon className="share-icon" /> Share 2k
          </span>
        </div>
      </div>
      <div className={`comment-section ${clicked ? 'show' : ''}`}>
        {comments.map((comment) => (
          <div key={comment.commentId} className="comment">
            <img src={comment.commenterPhoto} alt="" />
            <div className="comment-title">{comment.text}</div>
          </div>
        ))}
        <div className="write-comment">
          <img src={currentUser.photoURL} alt="" />
          <Input
            placeholder="What do you want to say"
            variant="outlined"
            color="success"
            name="comment"
            value={comment}
            onChange={onChangeHandler}
          />
          <Button variant="solid" onClick={handleAddComment}>
            Post !
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
