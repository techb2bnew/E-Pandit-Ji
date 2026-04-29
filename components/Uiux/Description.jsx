import React from 'react'

const Description = ({ description,Class, variant }) => {
    return (
        <p
            dangerouslySetInnerHTML={{ __html: description }}
            className={`${variant === 'secondary' ? 'text-base xl:text-lg 2xl:text-[20px] md:leading-8' : 'text-lg xl:text-[20px] 2xl:text-[25px] 2xl:leading-8 font-secondary'}   ${Class}`}
        />
    )
}

export default Description
