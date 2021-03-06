import React from 'react';

const Header = (props) => {
    const { company, date, username } = props;
    return (
        <nav class="pa3 pa4-ns">
          <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Site Name</a>
          <div class="tc pb3">
            <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
            <a class="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
            <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
            <a class="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
          </div>
        </nav>
)}

export default Header;
