function Pagination({ postPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="mt-3">
            <ul className="flex gap-3">
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} className="inline-block border bg-green-600 px-2.5 font-medium text-white" href="!#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
