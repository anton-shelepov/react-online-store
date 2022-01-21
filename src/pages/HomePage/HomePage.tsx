import { connect } from 'react-redux'
import Discounts from '../../Components/Discounts/Discounts'
import SimpleSlider from '../../Components/Slider/Slider'
import { IRootState } from '../../Redux/Store/store'
import s from './HomePage.module.scss'


interface Props {   
    
}

const HomePage: React.FC<any> = (props) => {
    return (
        <div className={s.home}>
            <SimpleSlider /> 
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