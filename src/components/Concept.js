export default function Concept({ title, image, description }) {
	return (
		<li className="concept">
			<img src={image} alt={title + " logo"} />
			<h2>{title}</h2>
			<p>{description}</p>
		</li>
	)
}
