import fantasyBooks from "../../data/fantasy.json"
import historyBooks from "../../data/history.json"
import scifiBooks from "../../data/scifi.json"
import romanceBooks from "../../data/romance.json"
import horrorBooks from "../../data/horror.json"
import LatestRelease from "../LatestRelease/LatestRelease";

const Main = () => {
    return (
        <LatestRelease fantasyBooks={fantasyBooks}
                       historyBooks={historyBooks}
                       horrorBooks={horrorBooks}
                       scifiBooks={scifiBooks}
                       romanceBooks={romanceBooks}
        />
    )
}

export default Main
