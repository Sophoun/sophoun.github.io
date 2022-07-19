import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Layout from "../components/layout";
import { TimelineOppositeContent } from "@mui/lab";
import { Button } from "@mui/material";
import { Star } from "@mui/icons-material";
import Utils from "../utils/utils";
import Image from "next/image";

const Resume: NextPage = () => {

    const [experiences, setExperiences] = useState<JSX.Element[]>([]);
    const [educations, setEducations] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const exps = [
            CustomTimeline({
                year: "05/2022 - Present",
                company: "Manager@Prince Bank",
                position: "Android Development",
                tasks: [
                    "Research new technology to fit the bank, Manage CI/CD, Code review",
                    "Lead flutter development team",
                ],
            }),
            CustomTimeline({
                year: "08/2020 - 04/2022",
                company: "Assistant Manager@Prince Bank",
                position: "Android Development",
                tasks: [
                    "Manage CI/CD, Code review",
                    "Lead flutter development team",
                ],
            }),
            CustomTimeline({
                year: "04/2018 – 08/2020",
                company: "Android Developer@Beniten",
                position: "Android Developer",
                tasks: [
                    "Develop utility tools for other developer uses",
                    "Independent developer that handles 3 or 4 projects at the same time",
                ],
            }),
            CustomTimeline({
                year: "06/2017 – 03/2018",
                company: "Web Developer@CamWP Dev",
                position: "WordPress Developer",
                tasks: [
                    "Develop and maintenance WordPress website for clients",
                ],
            }),
            CustomTimeline({
                year: "08/2013 – 06/2017",
                company: "IT Support@Blue Technology",
                position: "IT Support",
                tasks: [
                    "Provided onside support to customer who had trouble with their POS system and also redesign their report using Crystal Report",
                    "Training POS System to new customer",
                ],
            }),
        ];
        setExperiences(exps);
    }, []);

    useEffect(() => {
        const edus = [
            CustomTimeline({
                year: "08/2014 – 03-2018",
                company: "Royal University of Phnom Penh, RUPP",
                position: "Student",
                tasks: [
                    "Bachelor of Science in Computer Science",
                ],
            }),
            CustomTimeline({
                year: "06/2017 – 12/2017",
                company: "Cambodia Korean Cooperation Center, CKCC",
                position: "Student",
                tasks: [
                    "Certified Associate Android Development",
                ],
            }),
            CustomTimeline({
                year: "08/2011 – 08/2013",
                company: "Don Bosco Technical School, DBTS",
                position: "Student",
                tasks: [
                    "Certified associate web development",
                ],
            }),
        ];
        setEducations(edus);
    }, []);

    return (
        <Layout title={"Resume"}>
            <div className="grid grid-cols-1 place-content-center mt-[90px] text-white">
                <div className="w-[1084px] place-self-center">
                    <div className="grid place-content-center mt-6 ">
                        <div className="rounded-full border-2 border-green-500 w-[200px] h-[200px] overflow-clip">
                            <Image alt="profile picture" src={require("../public/profile.png")} placeholder="blur" blurDataURL={require("../public/profile-small.png")} width={200} height={200} className="rounded-full" />
                        </div>
                    </div>
                    <h1 className="text-center font-bold text-7xl mt-6">Sophoun Nheum</h1>
                    <div className="grid place-content-center">
                        <p className="text-center mt-6 text-2xl w-[600px]">Professional Flutter developer with background in Native Android development also doable backend development</p>
                    </div>
                    <div className="grid place-content-center mt-6">
                        <Button variant="outlined" onClick={() => Utils.openInNewTab("https://docs.google.com/document/d/1H0B3roqtRtj-3o3yOK8REJ26eMPsz2kGH056bdATXyg/edit?usp=sharing")}>
                            Download CV
                        </Button>
                    </div>

                    <h1 className="text-4xl text-center mt-6 mb-6 underline">Experiences</h1>
                    <Timeline position="alternate">
                        {
                            experiences
                        }
                    </Timeline>
                    <h1 className="text-4xl text-center mt-6 mb-6 underline">Educations</h1>
                    <Timeline position="alternate">
                        {
                            educations
                        }
                    </Timeline>
                </div>
            </div>
        </Layout>
    );
}

export default Resume;

type CustomTimelineProps = {
    year: String,
    company: String,
    position: String,
    tasks: String[],
}

const CustomTimeline = (props: CustomTimelineProps) => {
    return (
        <>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h6">
                    {props.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="success">
                        <Star />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <h3 className="text-2xl">{props.company}</h3>
                    <h6 className="text-xl mt-2">{props.position}</h6>
                    <p className="mt-2">
                        <ul className="list-none">
                            {
                                props.tasks.map((e, i) => {
                                    return (
                                        <li key={i}>{e}</li>
                                    );
                                })
                            }
                        </ul>
                    </p>
                </TimelineContent>
            </TimelineItem>
        </>
    );
}