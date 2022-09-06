import LeftSideNav from "../../components/LeftSideNav/LeftSideNav";
import CentralPage from "../../components/CentralPage/CentralPage";
import './MainPage.css'
export default function MainPage({user}){
    return (
        <main className="mainpage">
           <LeftSideNav /> 
           <CentralPage user={user}/> 
        </main>
    );
}