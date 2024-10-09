import CustomerReviews from "../../components/danh-gia"
import Introduction from "../../components/Introduce"
import ProjectsPage from "../../components/projects"
import Achievements from "../../components/thanh-tuu"


const HomePage = () => {

    return (
        <>
            <Introduction />
            <Achievements />
            <ProjectsPage />
            <CustomerReviews />
        </>
    )

}


export default HomePage