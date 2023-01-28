import classes from './Content.module.css'

type Props = {
    text1: string
    text2: string
    year: number
}
export const Content1 = (props: Props) => {
    let data = false
    return (
        <>
            <p className={`${classes.text}`}>{props.text1}</p>
            <p>{props.text2}</p>
            <div>Year:{props.year}</div>
        </>
    )
}
// export default Content
