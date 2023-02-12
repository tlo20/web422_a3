import {useRouter} from 'next/router';
import useSWR from 'swr';
import MovieDetails from '../../components/MovieDetails';
import Error from 'next/error'; 
import PageHeader from '../../components/PageHeader';


export default function Movie (){

    const router = useRouter();
    const { title } = router.query;

    

    const { data, error } = useSWR(`https://nice-erin-sparrow-kilt.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);

    if (data == undefined || data == null){return null}
    if (data.length==0){return(<Error statusCode={404} /> )}

    return (
        <>
            {data.map(movie=>{
                return(
                    <div key={movie._id}>
                        <PageHeader text={movie.title}></PageHeader>
                        <MovieDetails movie={movie} />
                    </div>
                    
                )
            })}
            
        </>
    )
}