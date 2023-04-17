export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className="text-xs font-semibold uppercase">Home   {" > "}   Governor</div>
                {children}
            </div>
        </div>
    )
}


export const metadata = {
    title: 'Nested Layouts',
};