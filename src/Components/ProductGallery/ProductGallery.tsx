import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import GalleryModal from './GalleryModal/GalleryModal';
import s from './ProductGallery.module.scss';

interface IProductGallery { 
    images: string[]
} 


const ProductGallery: React.FC<IProductGallery> = ({images}) => {

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