import React from 'react'


interface Props {
    onSelectChange: Function
}

import { Book } from '@/pages/browse';

export default function SortSelector({ onSelectChange }: Props) {
    return (
        <div id="filters" className="bg-orange-300 rounded p-2 border border-lime-900">
            {/* Sort Filters */}
            <a className="text-md flex flex-no-wrap whitespace-nowrap font-semibold text-lime-900"> Sort By:
                <select onChange={e => onSelectChange(e.target.value)} className="mx-2 rounded text-center px-2">
                    <option value="title">Title: A-Z</option>
                    <option value="author">Author: A-Z</option>
                    <option value="low-high">Price: low-high</option>
                    <option value="high-low">Price: high-low</option>
                </select>
            </a>
        </div>
    )
}
