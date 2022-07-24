import Input from "./Input";

const SearchBar = (props) => {

    

    return ( 
        <form onSubmit={props.submit}>
            <Input className={props.className} onChange={props.onChange} type="text" placeholder="Search a team by name"/>
        </form>
     );
}
 
export default SearchBar;