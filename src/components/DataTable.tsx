import { CallData } from '../interfaces/CallData';

interface DataTableProps {
    data: CallData[];
    filterState: string;
}

export const DataTable: React.FC<DataTableProps> = ({ data, filterState }) => {

    const filteredData = data.filter((item) =>
        filterState === "Todas" ? true : item.estado === filterState
    );

    return (
        <div className="overflow-x-auto">
            <table className="mx-auto mt-4 bg-white border border-gray-200 shadow-md rounded-lg" style={
                { width: "90%", borderCollapse: "collapse" }
            }>
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Duración (min)</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Estado</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Fecha</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => {

                        const [date, time, period] = item.fecha.split(" ");

                        return (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                                <td className="px-4 py-2 text-sm text-gray-800">{item.id}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{item.duracion}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{item.estado}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{date}</td>
                                <td className="px-4 py-2 text-sm text-gray-800">{time + " " + period}</td>
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};