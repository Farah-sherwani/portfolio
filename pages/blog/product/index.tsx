import Link from 'next/link'
import Head from 'next/head'

export default function Blog() {
    const Blogs = [
        {slug: 'title1', name: 'Title 1'},
        {slug: 'title2', name: 'Title 2'},
        {slug: 'title3', name: 'Title 3'},
        
    ];
    return (
        <>
        <head>BBlog</head>
        <main>
            <h1>This is blog page</h1>
        
        <ul>
            {Blogs.map (blog => (
                <li key={blog.slug}>
                    <Link href='/'>[blog.name]</Link>
                </li>
            ))}
        </ul>
        </main>
        </>
    )
}