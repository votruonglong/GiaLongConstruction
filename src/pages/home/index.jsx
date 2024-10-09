import CustomerReviews from "../../components/danh-gia"
import Introduction from "../../components/Introduce"
import ProjectsPage from "../../components/projects"
import Achievements from "../../components/thanh-tuu"


const HomePage = () => {

    return (
        <div>
            <Introduction />
            <Achievements />
            <ProjectsPage />
            <CustomerReviews />
        </div>
    )

}


export default HomePage