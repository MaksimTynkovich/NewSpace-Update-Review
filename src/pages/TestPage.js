import {useState} from 'react';
import PostItem from './PostItem';

function TestPage() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript1', body: 'Description'},
        {id: 2, title: 'Javascript2', body: 'Description'},
        {id: 3, title: 'Javascript3', body: 'Description'},
        {id: 4, title: 'Javascript4', body: 'Description'},
        {id: 5, title: 'Javascript5', body: 'Description'},
      ])
    const [title, setTitle] = useState('')
      function submit(e){
        e.preventDefault()
        const newPost = {
            date: new Date().getMonth(),
            id: 1,
            title
        }
        setPosts([...posts, newPost])
      }
  return (
    <div style={{textAlign: 'center'}}>
        <form>
            <input type="text" onChange={e => setTitle(e.target.value)}
       value={title} />
            <button onClick={submit}>text</button>
        </form>
        {posts.map((post, index) => 
            <PostItem number={index + 1} post={post}/>
            )}
    </div>
  );
}

export default TestPage;
