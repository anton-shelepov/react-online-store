import s from './CatalogBurgerMenu.module.scss';
import { slide as Menu } from 'react-burger-menu';
import CatalogSidebar from '../CatalogSidebar/CatalogSidebar';
import { GlobalSvgSelector } from '../_utils/GlobalSvgSelector';
import { useState } from 'react';


interface ICatalogBurgerMenu { }

let styles = {
    bmBurgerButton: {
        position: 'fixed',
        left: '15px',
        top: '0',
    },
}


const CatalogBurgerMenu: React.FC<ICatalogBurgerMenu> = (props: ICatalogBurgerMenu) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    const closeSideBar = () => {
        setIsOpen(false)
    }

    return (
        <div className={s.catalog_burger_menu}>
            <Menu
                customBurgerIcon={<GlobalSvgSelector id="burger-menu" />}
                isOpen={isOpen}
                onOpen={handleIsOpen}
                onClose={handleIsOpen}
                styles={styles}
            >
                <CatalogSidebar isOpen={isOpen} closeSideBar={closeSideBar} />
            </Menu>
        </div>
    )
}

export default CatalogBurgerMenu;
