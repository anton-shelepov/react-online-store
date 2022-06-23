import ReactModal from 'react-modal';
import MainSlider from '../../Slider/Slider';
import { GlobalSvgSelector } from '../../_utils/GlobalSvgSelector';
import s from './GalleryModal.module.scss';

interface IGalleryModal {
    images: string[];
    openModal: () => void;
    closeModal: () => void;
    modalIsOpen: boolean;
}

const customStyles = {
    content: {
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
    },
};

const images = [
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/30344fa068d6d14edf4242156fc203a7/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/82892b80d330b60fd7e0b2ace36f1150/02594dfc2f7718a8cffd6e65bb9f6b36f5911d9db3df4b6121331d19408d6a36.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/57514348641f808529429f068adec1ed/1da1162833eda0a06e915868dc25f8141509a5c0b5abadc90eabc2638e8003d6.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/30344fa068d6d14edf4242156fc203a7/41fbb0012918eb89be15f209addbb49912ee554576f157be471a9728f040d32c.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/82892b80d330b60fd7e0b2ace36f1150/02594dfc2f7718a8cffd6e65bb9f6b36f5911d9db3df4b6121331d19408d6a36.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/57514348641f808529429f068adec1ed/1da1162833eda0a06e915868dc25f8141509a5c0b5abadc90eabc2638e8003d6.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/57514348641f808529429f068adec1ed/1da1162833eda0a06e915868dc25f8141509a5c0b5abadc90eabc2638e8003d6.jpg.webp',
    'https://c.dns-shop.ru/thumb/st4/fit/500/500/57514348641f808529429f068adec1ed/1da1162833eda0a06e915868dc25f8141509a5c0b5abadc90eabc2638e8003d6.jpg.webp',
]

const GalleryModal: React.FC<IGalleryModal> = ({ closeModal, modalIsOpen }) => {

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <div className={s.container}>
                <button onClick={closeModal} className={s.close_btn}><GlobalSvgSelector id='close' /></button>
                <div className={s.slider}>
                    <MainSlider images={images} isArrows={false} />
                </div>
            </div>
        </ReactModal>
    );
}

export default GalleryModal;