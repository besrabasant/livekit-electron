import React from "react";

export const Header =  (props: React.PropsWithChildren) => {
    return (
        <div className="flex flex-wrap items-center w-full">
            <h2 className='flex-1 text-2xl font-bold pt-3'>LiveKit Video</h2>
            { props.children }
            <hr className='my-3 w-full' />
        </div>
    );
}