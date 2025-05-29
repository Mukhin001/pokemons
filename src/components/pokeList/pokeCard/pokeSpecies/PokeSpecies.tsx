import { useGetPokeSpeciesQuery } from "../../../../api/pokemons/pokemonsAll/pokemonsAll";
import ErrorComponent from "../../../error/ErrorComponent";
import Loader from "../../../loader/Loader";

interface Props {
    id: string;
};

const PokeSpecies = ({ id }: Props) => {
    const { data: species, isLoading, isError } = useGetPokeSpeciesQuery(id);

    if(isLoading) {
        return <Loader size='medium' />
    }

    if(isError) {
        return <ErrorComponent size="Large" />
    }

    return ( 
        <section>
            <p>capture_rate: {species?.capture_rate};</p>
            <p>id: {species?.id};</p>
            <p>base_happiness: {species?.base_happiness};</p>
            <p>color: {species?.color.name};</p>
            <p>habitat: {species?.habitat.name};</p>
            <p>evolves_from_species: {species?.evolves_from_species?.name ? species.evolves_from_species.name : 'no data available'};</p>
            <p>shape: {species?.shape.name};</p>
        </section>
     );
};
 
export default PokeSpecies;