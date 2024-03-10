import React from 'react'

type DetailProductPageProps = {
    params: {
        slug: string
    }
}

const DetailProductPage = (props: DetailProductPageProps) => {
    // destucturing : mengambil props
    const { params } = props;
    console.log(params)
    return (
        <div>
            <div>Detail Product Page</div>
            <h2>{params.slug}</h2>

        </div>

    )
}

export default DetailProductPage