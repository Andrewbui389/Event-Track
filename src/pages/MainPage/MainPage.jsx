import CentralPage from "../../components/CentralPage/CentralPage";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './MainPage.css'
export default function MainPage({user, setLeftSideItems}){
    let links = [<Link to='newevent'>Add New Event</Link>]
    useEffect(() => {
        setLeftSideItems(links)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <main className="rightSide">
           <CentralPage user={user}/> 
        </main>
    );
}