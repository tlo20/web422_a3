import Link from "next/link";
import Card from 'react-bootstrap/Card';
import MovieDetails from "../components/MovieDetails";
import PageHeader from "../components/PageHeader";
import { Nav} from "react-bootstrap"


export function getStaticProps() {
    //id 139738
    return new Promise((resolve,reject)=>{
      fetch('https://nice-erin-sparrow-kilt.cyclic.app/api/movies/573a1390f29313caabcd5967').then(res=>res.json()).then(data=>{
        resolve({ props: { movie: data } })
      })
    })
  }

export default function About (props){
 
    return (
        <>
            <PageHeader text="About the Developer"></PageHeader>
            <Card className="className">
                <Card.Body>
                    <p>
                        Currently studying at Seneca College<br/>
                        My favorite movie of all time would be : <Link href={"/movies/"+props.movie.title} passHref legacyBehavior ><Nav.Link>{props.movie.title}</Nav.Link></Link>
                    </p>
                     
                    <MovieDetails movie={props.movie} />
                </Card.Body>
            </Card>
        </>
        
    )
}