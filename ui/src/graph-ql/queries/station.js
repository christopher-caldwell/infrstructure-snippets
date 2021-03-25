import { gql } from 'apollo-boost'

export const STATIONS = gql`{
	stations {
		id
		name
		imageName
	}
}`

export const STATION_SONGS = gql`
	query($id: ID, $page: Int, $limit: Int) {
		station(id: $id){
			id
			songs(page: $page, limit: $limit){
				id
				title
				
			}
		}	
	}	
`