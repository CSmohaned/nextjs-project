import Link from "next/link";

export default function Posts(props) {
    return (
       <ul>
        {props.posts.map(post => (
            <div key={post.id}>
                    <li>{post.title}</li>
                    <li>{post.body}</li>
                    <li>{post.userId}</li>
                    <Link href={`/posts/${post.id}`}>view info</Link>
            </div>
     ))}
       </ul>
    )
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/posts');
    const data = await res.json();

    return{
        props: {
            posts: data
        }
    }
}