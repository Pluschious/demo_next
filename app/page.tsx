"use client"
import CountButton from "./CountButton/CountButton"
import SearchBar from "./SearchBar/SearchBar"
export default function Page{} {
    return <div>
    <CountButton name={"Count 5"} mult={5}/><CountButton name ={"Count 2"} mult={2}/>
    <hr />
    <a href="https://github.com/Pluschious">My github repo</a>
    <hr />
    <SearchBar />

    </div>
}