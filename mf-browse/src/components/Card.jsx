import { API_URL } from '../config';
import './Card.css';

export default function Card({ data }) {
	return (
		<div className="col-6 col-md-4 col-lg-3 p-2">
			<a className="card text-center card-custom" href={`/items/${data.id}`} data-link>
				<div className="card-body">
					<h4 className="card-title">{data.name}</h4>
					<img src={`${API_URL}/${data.logo_url}`} width="100" height="100" alt="logo" />
				</div>
			</a>
		</div>
	);
}
