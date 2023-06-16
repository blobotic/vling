import React, {useState} from "react"
import { Outlet, Link, useSearchParams } from "react-router-dom";
import Preview from "./Preview"
import lunr from "lunr"
import index from "./lunr_index.json"
import index2 from "./lunr_tag_index.json"

let idx = lunr(function() {
	this.ref('name')
	this.field('text')

	index.forEach(function(doc) {
		this.add(doc)
	}, this)
})

let idx2 = lunr(function() {
	this.ref('name')
	this.field('text')
	index2.forEach(function(doc) {
		this.add(doc)
	}, this)
})


// sort function for search
function sortResults(arr, s) {

	if (s == "date") {
		arr.sort(function(a,b) {
			return a.ref.localeCompare(b.ref);
		})
	}

	return arr
}

function Search() {

	const [query, setQuery] = useState("")
	const [results, setResults] = useState([])
	const [tagsOnly, setTagsOnly] = useState(false)
	const [sortBy, setSortBy] = useState("date")
	const [isStart, setStart] = useState(true)


	const [searchParams, setSearchParams] = useSearchParams()
	// setQuery(searchParams.get('q'))
	// console.log(searchParams.get('q'))

	React.useEffect(() => {
		setQuery(searchParams.get('q'))
		if (searchParams.has('tags')) setTagsOnly(true)
		setStart(false)
	}, [])

	React.useEffect(() => {
		setSearchParams(searchParams => {if (!isStart) searchParams.set("q", query || ""); if (tagsOnly) searchParams.set("tags", 'true'); else searchParams.delete("i"); return searchParams;})
		if (searchParams.get('q') && !query ) {return; }
		let d = {preventDefault: () => console.log("hi")}
		onFormSubmit(d)
		// console.log(searchParams)
	}, [query, tagsOnly])

	// page title
	React.useLayoutEffect(() => {
		document.title = "vling | Search"
	}, [])

	// console.log(idx.search("match"))

	// let results = []

	const onFormSubmit = async (e) => {
		e.preventDefault();

		// sort
		if (!tagsOnly) {
			setResults(sortResults(idx.search(query), sortBy))
		}
		else {
			setResults(sortResults(idx2.search(query), sortBy))
		}

		console.log(results)
	}

	return (
		<div className="home">
			<form onSubmit={onFormSubmit} className="center margin-bottom-2">
			<div className="left inline-block">
			<input autoFocus type="text" value={query} onChange={e => setQuery(e.currentTarget.value)} className="searchbar" />
			<button type="button" className="searchToggle" onClick={()=>setTagsOnly(!tagsOnly)}>{tagsOnly ? "Search tags only":"Search everything"}</button>
			<div className="searchResultsText">{(results.length >= 0) ? results.length : index.length} result{(results.length!= 1)?"s":""}</div>
			</div>
			</form>

			{results.map(res => <div key={res["ref"]}><Preview to={"../"+res["ref"].split(":")[0].replaceAll(" ", "/").toLowerCase()}>{res["ref"]}</Preview></div>)}
		</div>)
}

export default Search;