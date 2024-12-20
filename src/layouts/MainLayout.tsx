import { FC, ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
    <div className="flex h-screen bg-gray-100">
        <div className="flex-1 flex flex-col">
            <header className="bg-white shadow p-4">
                <h1 className="text-lg font-semibold text-gray-800">Dashboard Llamadas</h1>
            </header>
            <main className="p-8 overflow-y-auto">{children}</main>
        </div>
    </div>
);
