 import Badge from './Badge'
import Rating from './Rating.jsx'


export default function ProductCard({product, selectedColor, onQuickAction}){
const displayColor = selectedColor || product.colors[0]
return (
<article className="bg-white rounded-lg shadow-sm overflow-hidden group">
<div className="relative h-48 flex items-center justify-center" style={{background: displayColor}}>
{product.isHot && (
<div className="absolute top-2 left-2">
<Badge color="red">HOT</Badge>
</div>
)}
<img
src={product.imageUrl}
alt={product.name}
className="h-40 object-contain pointer-events-none"
loading="lazy"
/>
</div>
<div className="p-4">
<h3 className="font-semibold text-sm text-gray-800">{product.name}</h3>
<div className="mt-2 flex items-center justify-between">
<div>
<div className="text-sm text-gray-500 line-through">₹{product.price}</div>
<div className="text-md font-semibold">₹{product.discountPrice}
<span className="ml-2 text-sm text-green-600">{product.discountPercent}% off</span>
</div>
</div>
<Rating value={product.ratingValue} count={product.ratingCount} />
</div>
<div className="mt-3 flex items-center gap-2">
{product.colors.slice(0,4).map((c, idx) => (
<button key={idx} aria-label={`color-${c}`} className="w-6 h-6 rounded-full ring-1 ring-white" style={{background:c}} />
))}
</div>
<div className="mt-4 flex gap-2">
<button onClick={()=>onQuickAction('wish', product)} className="flex-1 border rounded px-3 py-1 text-sm">Wishlist</button>
<button onClick={()=>onQuickAction('cart', product)} className="flex-1 bg-blue-600 text-white rounded px-3 py-1 text-sm">Add</button>
</div>
</div>
</article>
)
}