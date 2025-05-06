
import TooltipBadge from '../../tooltipBadge/TooltipBadge';

interface Props {
    name: string | undefined;
};

const PokeDetail = ({ name }: Props) => {
    
    return ( 
        <section style={{padding: '0 50px'}}>
            <h2>{name}</h2>
            <TooltipBadge name={name} description={''} alt='Poke Details' classNameProps='wrapLikeImgGreyVisible' />
        </section>
     );
};
 
export default PokeDetail;