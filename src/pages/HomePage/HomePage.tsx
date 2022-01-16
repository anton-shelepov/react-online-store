import { ReactElement } from 'react'
import s from './HomePage.module.scss'


interface Props {
    
}

export default function HomePage({}: Props): ReactElement {
    return (
        <div className={s.home}>
            HOME
        </div>
    )
}
