import { connect } from 'react-redux'
import Discounts from '../../Components/Discounts/Discounts'
import MainSlider from '../../Components/Slider/Slider'
import { IRootState } from '../../Redux/store'
import s from './HomePage.module.scss'
import { IHomeState } from './../../Types/homeTypes' 


const HomePage: React.FC<IHomeState> = (props) => {
    return (
        <div className={s.home}>
            <MainSlider /> 
            <Discounts discounts={props.discounts} />
        </div>
    )
}

const mapStateToProps = (state: IRootState) => {
    return {
        discounts: state.home.discounts
    }
}

export default connect(mapStateToProps)(HomePage)