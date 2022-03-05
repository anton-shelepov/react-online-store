import { connect } from 'react-redux'
import Discounts from '../../components/Discounts/Discounts'
import MainSlider from '../../components/Slider/Slider'
import { RootState } from '../../store/store'
import s from './HomePage.module.scss'
import ViewedProducts from '../../components/ViewedProducts/ViewedProducts'
import { IHomeState } from '../../types/homeTypes'


const images = [
    'https://images.wbstatic.net/bners1/big_spring_16_02.jpg',
    'https://images.wbstatic.net/bners1/elsakka.jpg',
    'https://images.wbstatic.net/bners1/big_23fev_16_02.jpg',
    'https://images.wbstatic.net/bners1/big_best999.jpg',
]

const HomePage: React.FC<IHomeState> = (props) => {
    return (
        <div className={s.home}>
            <MainSlider images={images} isDots={false} /> 
            <Discounts discounts={props.discounts} />
            <ViewedProducts />
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        discounts: state.home.discounts
    }
}

export default connect(mapStateToProps)(HomePage)