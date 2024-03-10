import React from 'react'

type DetailProductPageProps = {
    params: {
        slug: string[]
    }
}

const DetailProductPage = (props: DetailProductPageProps) => {
    // destucturing : mengambil props
    const { params } = props;
    console.log(params)
    return (
        <div>
            <div>Detail Product Page</div>
            <p>category : {params.slug[0]}</p>
            <p>Gender : {params.slug[1]}</p>
            <p>ID : {params.slug[2]}</p>

        </div>

    )
}

export default DetailProductPage