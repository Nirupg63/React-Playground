import { Article } from './Article/Article'
import { Content } from './Content/Content'
import styles from './HtmlTest.module.css'

const HtmlTest = () => {
    return(<div>
        <h1 className={styles.h1}>Html Test Component</h1>
        <a href="./assets/er.png" download={"Elden Ring.png"}>Download Link</a> 
        <Article></Article>
        <Content></Content>
    </div>)
}

export { HtmlTest }