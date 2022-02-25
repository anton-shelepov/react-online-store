import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import GalleryModal from './GalleryModal/GalleryModal';
import s from './ProductGallery.module.scss';

interface IProductGallery { }

const images = [
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/30344fa068d6d14edf4242156fc203a7/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/82892b80d330b60fd7e0b2ace36f1150/02594dfc2f7718a8cffd6e65bb9f6b36f5911d9db3df4b6121331d19408d6a36.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/57514348641f808529429f068adec1ed/1da1162833eda0a06e915868dc25f8141509a5c0b5abadc90eabc2638e8003d6.jpg.webp'
]


const ProductGallery: React.FC<IProductGallery> = (props) => {

    useEffect(() => {
        ReactModal.setAppElement('body');
    }, [])

    const [mainImage, setMainImage] = useState(images[0])

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className={s.product_gallery}>
            <div className={s.images_list}>
                {
                    images.map((link) => {
                        return (
                            <img
                                className={s.small_image}
                                src={link}
                                key={link}
                                onMouseOver={() => setMainImage(link)}
                                alt='small_product' />
                        )
                    })
                }
            </div>
            <div className={s.main_image}>
                <img
                    className={s.large_image}
                    src={mainImage}
                    onClick={openModal}
                    alt='large_product' />
            </div>
            <GalleryModal
                modalIsOpen={modalIsOpen}
                openModal={openModal}
                closeModal={closeModal}
                images={images} />
        </div>
    )
}

export default ProductGallery;