import { h } from 'preact';
import EditButton from "../buttons/EditButton.tsx";

type EmployeeDetailsFrameProps = {
    children: h.JSX.Element|string;
    title: string;
    size?: string;
    editLink: string;
}

export default function EmployeeDetailsFrame({ children, title, size = "2", editLink }: EmployeeDetailsFrameProps): h.JSX.Element {
    return (
        <div class={`col-span-${size} bg-gray-100 p-4 rounded-lg shadow-inner`}>
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h2 class="text-xl font-semibold text-gray-600 mb-2 md:mb-0">
                    {title}
                </h2>
                <EditButton href={editLink} />
            </div>
            {children}
        </div>
    )
}