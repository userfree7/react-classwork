type Props = {
    text1: string
    text2: string
    year: number
}
export const Content1 = (props: Props) => {
    let data = false
    return (
        <>
            <p
                style={{
                    color: data ? 'white' : 'yellow',
                    backgroundColor: 'green',
                    padding: '15px',
                }}
            >
                {props.text1}
            </p>
            <p>{props.text2}</p>
            <div>Year:{props.year}</div>
        </>
    )
}
// export default Content
