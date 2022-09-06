import SignUpForm from "../../components/SignUpForm/SignUpForm";
export default function Auth({user}){
    return(
        <main>
            <h1>
                AuthPage
            </h1>
            <SignUpForm data={user}/> 
        </main>
    );
}