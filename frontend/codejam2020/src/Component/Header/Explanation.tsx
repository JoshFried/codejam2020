import React, { Component } from 'react'

export default function Explanation() {
    const explanation = 'Search and rate restaurants, shops, businesses, and more...';
    
    return (
        <div>
            <div className="explanation">{explanation}</div>
        </div>
    )
}