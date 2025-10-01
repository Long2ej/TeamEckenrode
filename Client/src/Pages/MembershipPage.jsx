import React from 'react';
import { Link } from 'react-router-dom';

const MembershipPage = () => {
    return (
        <>
            <h1 className="head">Membership</h1>

            <div className="membershipcontainer">

                <div className="memboxes">
                    <h1 className="head">Day Pass Membership</h1>
                    <p className="price">$30</p>
                    <p className="descriptionofpurchase">Each Day</p>
                    <p className="descriptionofmem">Day-by-day access without a long term commitment</p>
                    <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=156543&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=5%2f31%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1" target="_blank">
                        <button className="action_btn1">Join Now</button>
                    </a>
                </div>

                <div className="memboxes">
                    <h1 className="head">One Week Membership</h1>
                    <p className="price">$50</p>
                    <p className="descriptionofpurchase">Each Week</p>
                    <p className="descriptionofmem">Week-by-week payment without a longer term commitment</p>
                    <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=156543&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=5%2f31%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1" target="_blank">
                        <button className="action_btn1">Join Now</button>
                    </a>
                </div>

                <div className="memboxes">
                    <h1 className="head">One Month Membership</h1>
                    <p className="price">$95</p>
                    <p className="descriptionofpurchase">Each Month</p>
                    <p className="descriptionofmem">Stick around for a bit with a monthly commitment</p>
                    <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=156543&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=5%2f31%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1" target="_blank">
                        <button className="action_btn1">Join Now</button>
                    </a>
                </div>

                <div className="memboxes">
                    <h1 className="head">Two Month Membership</h1>
                    <p className="price">$180</p>
                    <p className="descriptionofpurchase">Every Two Months</p>
                    <p className="descriptionofmem">Two months worth of membership</p>
                    <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=156543&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=5%2f31%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1" target="_blank">
                        <button className="action_btn2">Join Now</button>
                    </a>
                </div>

                <div className="memboxes">
                    <h1 className="head">Three Month Membership</h1>
                    <p className="price">$255</p>
                    <p className="descriptionofpurchase">Every Three Months</p>
                    <p className="descriptionofmem">A full season worth of membership</p>
                    <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=156543&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=5%2f31%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1" target="_blank">
                        <button className="action_btn3">Join Now</button>
                    </a>
                </div>

                <div className="memboxes">
                    <h1 className="head">Annual Membership</h1>
                    <p className="price">$70</p>
                    <p className="descriptionofpurchase">Each Month</p>
                    <p className="descriptionofmemannual">Full year access our most popular plan<br />*$79 initiation fee & one time yearly maintenance fee of $70*</p>
                    <a href="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=156543&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=5%2f31%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1" target="_blank">
                        <button className="action_btn4">Join Now</button>
                    </a>
                </div>

            </div>
        </>
    );
}

export default MembershipPage;

