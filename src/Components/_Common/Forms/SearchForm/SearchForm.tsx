import { useForm } from "react-hook-form";
import s from "./SearchForm.module.scss"; 


type SearchForm = {
    search_form: string;
} 

const SearchForm: React.FC = () => {

    const { register, handleSubmit } = useForm<SearchForm>();

    return (
        <input {...register("search_form")} className={s.search_form} />
    )
}

export default SearchForm;