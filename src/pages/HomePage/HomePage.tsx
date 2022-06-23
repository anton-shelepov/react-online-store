import { connect } from 'react-redux'
import Discounts from '../../components/Discounts/Discounts'
import MainSlider from '../../components/Slider/Slider'
import { RootState } from '../../store/store'
import s from './HomePage.module.scss'
import ViewedProducts from '../../components/ViewedProducts/ViewedProducts'
import { IHomeState } from '../../types/homeTypes'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import { useAppDispatch } from '../../utils/hooks/reduxHooks'
import { useEffect } from 'react'
import { fetchPopularProductsRequest } from '../../store/actions/homeActions/homeActions'


const images = [
    'https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/EarthWeek21/EW_Story_Seller.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/EarthWeek21/EW_Story_Seller.jpg',
    'https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/EarthWeek21/EW_Story_Seller.jpg',
]

const HomePage: React.FC<IHomeState> = (props) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchPopularProductsRequest())
    }, [dispatch])

    return (
        <div className={s.home}>
            <MainSlider images={images} isDots={false} />
            <Discounts discounts={props.discounts} />
            <PopularProducts popularProducts={props.popularProducts} />
            <ViewedProducts />
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        discounts: state.home.discounts,
        popularProducts: state.home.popularProducts,
    }
}

export default connect(mapStateToProps)(HomePage)