
export default function Dash({ children }: {children: React.ReactNode}) {
    return (
        <main className="flex-1 bg-gray-100"> 
            {children}
        </main>
    )
}