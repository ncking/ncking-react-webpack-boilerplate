import { H1 } from '@components'
import './scss/global.scss'
import styles from './scss/styles.scss'

export default () => {
    return <div className={styles.wrap}>
        <H1>
            Hello World swc-loader ...
        </H1>
    </div>
};