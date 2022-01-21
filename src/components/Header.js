import React from 'react'
// import { motion } from 'framer-motion'

/*
const HEADER_ANIM_DURATION = 0.25
const header = {
    hidden : {opacity : 0},
    visible : {opacity : 1}
}
*/
function Header() {
    return (
        <nav 
            // initial="hidden"
            // animate="visible"
            // transition={{ duration: HEADER_ANIM_DURATION}}
            // variants={header}
            className="">
            <div className="">
                <div className="flex justify-center">
                    <h1 className="py-2 text-4xl font-medium" href="">Animal Crossing Study</h1>
                    {/* ADD DARK MODE BUTTON LATER */}
                </div>
            </div>
        </nav>
        
    )
}

export default Header
