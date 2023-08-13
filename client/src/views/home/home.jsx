import Cards from "../../components/cards/Cards";

const Home = ({characters}) => {

    return (
        <div>
            <Cards characters={characters}/>
        </div>
    )
}

export default Home;