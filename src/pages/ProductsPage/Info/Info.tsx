import Sort from '../../../components/Sort/Sort';
import s from './Info.module.scss';

interface IInfo { }

const Info: React.FC<IInfo> = (props) => {

    let num1 = 26

    const lastNumber = (+num1.toString().charAt(0)) !== 1 ? (+num1.toString().slice(-1)) : 0

    const ending = () => {
        switch (lastNumber) {
            case 1:
                return ''

            case 2:
                return 'a'

            case 3:
                return 'a'

            case 4:
                return 'a'

            default:
                return 'ов'
        }
    } 

    return (
        <div className={s.info}> 
            <h2 className={s.title}>
                {`Ноутбуки ${num1} товар${ending()}`}
            </h2> 

            <Sort />

        </div>
    )
}

export default Info;