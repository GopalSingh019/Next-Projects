
import Navbar from './_component/navbar';

function layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default layout