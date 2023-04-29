import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Product() {
    const router = useRouter();
    const { slug_id } = router.query;

return (
<>
<head>product</head>
<main>
    <h1>Product Page</h1>
</main>
</>

)
}