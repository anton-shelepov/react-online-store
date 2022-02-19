import { GlobalSvgSelector } from '../../../../_Assets/GlobalSvgSelector';
import s from './SearchButton.module.scss';

interface ISearchButton { }

const SearchButton: React.FC<ISearchButton> = (props) => {
    return (
        <button className={s.search_button}><GlobalSvgSelector id='search' />{props.children}</button>
    )
}

export default SearchButton;