

interface IContainerProps {
    children: React.ReactNode;
}

const Container = ({children}:IContainerProps) => {
    return (
        <div className="container mx-auto px-4">
            {children}
        </div>
    )
}   

export default Container;   
