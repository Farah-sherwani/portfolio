import Head from 'next/head'
import Link from 'next/link'

export default function daraz ({ users} : {users: any []}) {
    return(
        <>
        <head>
            <title>Daraz</title>
        </head>
        <main>
            <h1>Daraz page</h1>
            <ul>{users.map(user =>(
                <li key={user.id}>
                    <Link href={'/daraz/${user.id}'}>{user.name}</Link>
                </li>

                )) }
            </ul>

        </main>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users/')
    const users = await res.json ()
    return {
        props: {
            users,
        },
    }
}