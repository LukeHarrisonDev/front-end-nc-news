import { useSearchParams } from "react-router-dom"

function SortByFilter({setSortByFilter}) {

    const [searchParams, setSearchParams] = useSearchParams()
    
    function selectHandler(e) {
        setSortByFilter(JSON.parse(e.target.value))
        setSearchParams(JSON.parse(e.target.value))
    }

    return (
        <form>
            <label className="sort-label" htmlFor="sort-by-filter">Sort Articles by:</label>
            <select id="sort-by-filter" onChange={selectHandler}>
                <option value={JSON.stringify({sort_by: 'created_at'})}>Date: Newest to Oldest (Default)</option>
                <option value={JSON.stringify({sort_by: 'created_at', order: 'asc'})}>Date: Oldest to Newest</option>
                <option value={JSON.stringify({sort_by: 'comment_count'})}>Comments: Most to Least</option>
                <option value={JSON.stringify({sort_by: 'comment_count', order: 'asc'})}>Comments: Least to Most</option>
                <option value={JSON.stringify({sort_by: 'votes'})}>Votes: Most to Least</option>
                <option value={JSON.stringify({sort_by: 'votes', order: 'asc'})}>Votes: Least to Most</option>
            </select>
        </form>

    )
}

export default SortByFilter