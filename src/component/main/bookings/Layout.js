export function Row({ children }) {
    return (
        <tr className="lws-bookedTable text-black">{children}</tr>
    )
}

export function Col({ children }) {
    return (
        <td className="px-6 py-4">{children}</td>
    )
}

export function ColCenter({ children }) {
    return (
        <td className="px-6 py-4 text-center">{children}</td>
    )
}