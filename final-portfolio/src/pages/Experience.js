import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    return (
        <div className='experience'> 
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2018-2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                         Rutgers University, New Brunswick, NJ
                    </h3>
                    <p>B.S in Business Administration, Information Technology</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="July 2021- Sept 2021"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                         Xbytes, Plano, TX, Informatics Intern
                    </h3>
                    <p>
                        <ul>
                            <li>Marketed a newly developed cybersecurity business for an encryption software solution by reaching out to potential clients and relaying information for sales, market research, and industry environment</li>
                            <li>Created SQL queries to analyze clients and create cohorts to target specific groups with their own unique marketing strategy</li>
                            <li>Organized and presented sales meetings, informing clients of product and price packages</li>
                            <li>Researched potential accounts to uncover sales opportunities in highly regulated industries, such as healthcare technology SMBs</li>
                            <li>Expanded lead funnel by 10x by crafting targeted messaging to key personas in Product Management and IT</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Aug 2022- Mar 2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                         Hercules LLC, Hillsborough, NJ, Data Analyst
                    </h3>
                    <p>
                        <ul>
                            <li>Recorded HR data by extracting employee information from legacy payroll system onto the new payroll system by creating schemas to onboard existing and newly hired employees</li>
                            <li>Provided analysis and reports on over $300 million worth of sales and $100 million worth of inventory using historical data on all products which is directly reported to senior leadership and other stakeholders</li>
                            <li>Documented sales invoices from QuickBooks onto Sage sales systems to streamline data visibility and usability process by utilizing SQL to extract and manipulate data from central data warehouse</li>
                            <li>Utilized pivot tables and created SQL queries to create financial reports of raw materials, inventory, and cash on hand</li>
                            <li>Utilized Jira and Microsoft Office to recognized patterns, reduce overlaps, departmental inconsistencies, and reducing team error</li>
                            <li>Created visual analytics in regards to finance, operations and the ERP system for senior management to promote for a company buyout</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Apr 2023- Oct 2023"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                         Rutgers University, New Brunswick, NJ
                    </h3>
                    <p>Bootcamp in Computer Science</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Mar 2023- Present"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                         NECA, Hillside, NJ, Informatics Intern
                    </h3>
                    <p>Product Manager</p>
                </VerticalTimelineElement>



            </VerticalTimeline>
        </div>
    );
}

export default Experience;
