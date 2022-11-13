export default function PostsId(props) {
    return (
       <div>{props.posts.error ? <h2>{props.posts.error}</h2> : <h2>{props.posts.title}</h2>}</div>
    )
}
export async function getStaticPaths() {
    const res = await fetch("http://localhost:3000/api/posts");
    const data = await res.json();
    const paths = data.map(id=> {
        return {
            params: {id: `${id.id}`}
        }
    })
    return{
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`);
    const data = await res.json();
    return{
        props: {
            posts: data
        }
    }
}