import { useState } from "react";

export const ChannelList = (props) => {
    return (
        <>
            <div className="h-auto grow bg-base-100 overflow-scroll scrollbar-thin scrollbar-webkit">
                <ul className="menu bg-base-100 font-medium
                [&_li>a]:py-1">
                    {/* insert dropdowns here */}
                {props.children}
                </ul>
            </div>
        </>
    );
};

export const ChannelDropdown = (props) => {
    return (
        <>
            <li>
              <details open>
                <summary className="uppercase text-xs">{props.dropName}</summary>
                <ul className="ms-0 ps-0">
                    {/* insert channels here */}
                  {props.children}
                </ul>
              </details>
            </li>
        </>
    );
};

export const Channel = (props) => {
    return (
        <>
            <li>
                <a href="">
                    {/* decides between text or audio channel icon */}
                {props.text == true && <svg className="h-5 w-5 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="4" y1="9" x2="20" y2="9" />  <line x1="4" y1="15" x2="20" y2="15" />  <line x1="10" y1="3" x2="8" y2="21" />  <line x1="16" y1="3" x2="14" y2="21" /></svg> }  
                {props.text == false && <svg class="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/>
                </svg> } 
                
                    {props.channel}</a>
            </li>
        </>
    );
};
export default ChannelList