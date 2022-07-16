import React, { Children } from 'react';

interface Table {
    children: React.ReactNode;
    className?: string;
}

const Table = ({ children, className }: Table) => {
    return (
        <table className={`table-auto border-collapse border ` + className}>{children}</table>
    );
};

interface TableHeader {
    th: Array<string>;
    className?: string;
    children?: React.ReactNode;
}

const TableHeader = ({ th, className, children }: TableHeader) => {
    const headerItem = th.map((th, index) =>
        <th className={`px-4 py-2 border bg-gray-100 ` + className} key={index}>{th}</th>
    );
    return (
        <thead>
            <tr>
                {headerItem}
            </tr>
        </thead>
    );
};

interface TableRow {
    tds: Array<Array<string>>;
    className?: string;
    children?: React.ReactNode;
}

const TableRow = ({ tds, className, children }: TableRow) => {
    const bodyItems = tds.map(td =>
        <tr>
            {td.map((row, index) =>
                <td className={`px-4 py-2 border ` + className} key={index}>{row}</td>
            )}
            {children}
        </tr>
    );

    return (
        <tbody>
            {bodyItems}
        </tbody>
    );
};

Table.TableHeader = TableHeader;
Table.TableRow = TableRow;

export default Table;