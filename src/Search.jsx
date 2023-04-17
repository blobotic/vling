import React, {useState} from "react"
import { Outlet, Link } from "react-router-dom";
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


function Search() {

	const [query, setQuery] = useState("")
	const [results, setResults] = useState([])
	const [tagsOnly, setTagsOnly] = useState(false)

	// console.log(idx.search("match"))

	// let results = []

	const onFormSubmit = async (e) => {
		e.preventDefault();

		// console.log(idx.search(query))
		// console.log(query)
		console.log(tagsOnly)
		if (!tagsOnly) {
			setResults(idx.search(query))
		}
		else {
			setResults(idx2.search(query))
		}

		console.log(results)
	}

	return (
		<div className="home">
			<form onSubmit={onFormSubmit} className="center">
			<div className="left inline-block">
			<input type="text" value={query} onChange={e => setQuery(e.currentTarget.value)} className="searchbar" />
			<button type="button" className="searchToggle" onClick={()=>{setTagsOnly(!tagsOnly)}}>{tagsOnly ? "Search tags only":"Search everything"}</button>
			</div>
			</form>

			{results.map(res => <div key={res["ref"]}><Link to={"../"+res["ref"].split(":")[0].replaceAll(" ", "/").toLowerCase()}>{res["ref"]}</Link></div>)}
		</div>)
}

export default Search;