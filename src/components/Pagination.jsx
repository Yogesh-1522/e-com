export default function Pagination({page, totalPages, onPageChange}){
const pages = []
for(let i=1;i<=totalPages;i++) pages.push(i)
return (
<nav className="flex items-center gap-2" aria-label="pagination">
<button onClick={()=>onPageChange(Math.max(1,page-1))} disabled={page===1} className="px-3 py-1 border rounded">Prev</button>
{pages.map(p=> (
<button key={p} onClick={()=>onPageChange(p)} className={`px-3 py-1 rounded ${p===page ? 'bg-blue-600 text-white' : 'border'}`}>{p}</button>
))}
<button onClick={()=>onPageChange(Math.min(totalPages,page+1))} disabled={page===totalPages} className="px-3 py-1 border rounded">Next</button>
</nav>
)
}