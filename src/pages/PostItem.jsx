function PostItem(props) {
  return (
    <div>
        {props.post.date} {props.number} {props.post.title} {props.post.body}
    </div>
  );
}

export default PostItem;
